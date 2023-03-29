import { useAtomValue } from "jotai";
import { viewAtom } from "../data/DataProvider";
import Aliens from "./Aliens";
import Menu from "./Menu";
import Series from "./Series";

function ViewSwitch() {
  const view = useAtomValue(viewAtom);
  const isAliens = view === "aliens";

  return isAliens ? <Aliens /> : <Series />;
}

export default ViewSwitch;
