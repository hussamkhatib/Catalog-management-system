import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

import { useRef, useCallback, useEffect, useState, useMemo } from "react";
import Button from "../Button";
import db from "../../db";
import { useAtom } from "jotai";
import { activeTabAtom } from "../../atom";
import { columnDefs } from "../../constants";
import { GetRowIdParams, RowNode } from "ag-grid-enterprise";
import { CellEditingStoppedEvent } from "ag-grid-community";
import { Product } from "../../seed";

const Products = () => {
  const [activeTab] = useAtom(activeTabAtom);
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Product[]>([]);

  const columns = useCallback(() => {
    return columnDefs(activeTab);
  }, [activeTab]);

  useEffect(() => {
    db.products
      .where("category")
      .equals(activeTab)
      .toArray()
      .then((data) => {
        setRowData(data);
      });
  }, [activeTab]);

  const getRowId = useCallback((params: GetRowIdParams) => {
    return params.data.id;
  }, []);

  const onTxInsertOne = useCallback(async () => {
    const product = {
      name: "",
      price: null,
      category: activeTab,
      subCategory: "",
    };
    const id = await db.products.add(product);
    const newRecord = { id, ...product };
    if (gridRef.current)
      gridRef.current.api.applyTransaction({
        add: [newRecord],
        addIndex: 0,
      });
  }, [activeTab]);

  const onTxRemove = useCallback(() => {
    if (gridRef.current) {
      const selectedNodes = gridRef.current.api.getSelectedNodes();
      // @NOTE: alert is not a good way to handle this, but it's just a demo.
      if (!selectedNodes.length) alert("No rows selected");
      const selectedData = selectedNodes.map(({ data }: RowNode) => {
        db.products.delete(data.id);
        return data;
      });

      gridRef.current.api.applyTransaction({
        remove: selectedData,
      });
    }
  }, []);

  const onCellEditingStopped = (payload: CellEditingStoppedEvent) => {
    const {
      data: { id },
      colDef: { field },
    } = payload;
    if (field) db.products.update(id, { [field]: payload.newValue });
  };

  const defaultColDef = useMemo(
    () => ({
      editable: true,
      // allow every column to be aggregated
      enableValue: true,
      // allow every column to be grouped
      enableRowGroup: true,
    }),
    []
  );

  return (
    <div className="ag-theme-alpine w-full h-full">
      <div className="flex gap-x-2 px-2.5 py-1.5">
        <Button onClick={onTxInsertOne}>Add Product</Button>
        <Button onClick={onTxRemove}>Remove Product</Button>
      </div>

      <AgGridReact
        ref={gridRef}
        getRowId={getRowId}
        rowSelection="multiple"
        rowData={rowData}
        animateRows={true}
        defaultColDef={defaultColDef}
        columnDefs={columns()}
        onCellValueChanged={onCellEditingStopped}
        sideBar={true}
      />
    </div>
  );
};

export default Products;
