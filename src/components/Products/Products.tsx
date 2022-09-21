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

const Products = () => {
  const [activeTab] = useAtom(activeTabAtom);
  const gridRef = useRef<any>();
  const [rowData, setRowData] = useState<any>(null);

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

  const getRowId = useCallback((params: any) => {
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
    gridRef.current.api.applyTransaction({
      add: [newRecord],
    });
  }, [activeTab]);

  const onTxRemove = useCallback(() => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map(({ data }: any) => {
      db.products.delete(data.id);
      return data;
    });

    gridRef.current.api.applyTransaction({
      remove: selectedData,
    });
  }, []);

  const onCellEditingStopped = (payload: any) => {
    const {
      data: { id },
      colDef: { field },
    } = payload;

    db.products.update(id, { [field]: payload.newValue });
  };

  const defaultColDef = useMemo(
    () => ({
      editable: true,
      // allow every column to be aggregated
      enableValue: true,
      // allow every column to be grouped
      enableRowGroup: true,
      // allow every column to be pivoted
    }),
    []
  );
  //FIXME
  if (!rowData) return null;

  return (
    <div className="ag-theme-alpine w-full h-full overflow-y-hidden">
      <div className="flex gap-x-2 px-2.5 py-1.5">
        <Button onClick={onTxInsertOne}>Add Product</Button>
        <Button
          // TODO
          // disabled={!gridRef.current.api.getSelectedNodes().length}
          onClick={onTxRemove}
        >
          Remove Product
        </Button>
      </div>

      <AgGridReact
        // enableCellChangeFlash={true}
        ref={gridRef}
        getRowId={getRowId}
        rowSelection="multiple"
        rowData={rowData}
        animateRows={true}
        defaultColDef={defaultColDef}
        columnDefs={columns()}
        onCellValueChanged={onCellEditingStopped}
        sideBar={true}
        // onCellEditingStopped={onCellEditingStopped}
      />
    </div>
  );
};

export default Products;
