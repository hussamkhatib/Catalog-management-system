import { atomWithStorage } from "jotai/utils";
import { categoryArr } from "./constants";

const activeTabAtom = atomWithStorage("activeTab", categoryArr[0]);
export default activeTabAtom;
