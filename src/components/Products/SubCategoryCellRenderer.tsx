import { ICellRendererParams } from "ag-grid-community";
import Badge from "./Badge";
import { subCategoryStyles } from "../../constants";

export default (
  props: ICellRendererParams<any, keyof typeof subCategoryStyles>
) => {
  const getStyles = subCategoryStyles?.[props.value];

  return <Badge styles={getStyles || "bg-gray-200"}>{props.value}</Badge>;
};
