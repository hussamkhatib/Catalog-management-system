import { ICellRendererParams } from "ag-grid-community";
import Badge from "./Badge";
import { subCategoryStyles } from "../../constants";

export default (props: ICellRendererParams) => {
  return <Badge styles={subCategoryStyles[props.value]}>{props.value}</Badge>;
};
