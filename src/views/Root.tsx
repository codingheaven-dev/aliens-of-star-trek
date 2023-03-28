import { useMemo } from "react";
import { useData } from "../data";
import Aliens from "./Aliens";
import Menu from "./Menu";
import Series from "./Series";

function Root() {
  const view = useData(({ state: { view } }) => view);
  const isAliens = useMemo(() => view === "aliens", [view]);
  return (
    <main>
      <h1 className="title">Star Trek: Aliens</h1>
      <Menu />
      <section className="content">
        {isAliens ? <Aliens /> : <Series />}
      </section>
    </main>
  );
}

export default Root;
