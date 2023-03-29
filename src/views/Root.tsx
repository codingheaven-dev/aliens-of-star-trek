import Menu from "./Menu";
import ViewSwitch from "./ViewSwitch";

function Root() {
  return (
    <main>
      <h1 className="title">Star Trek: Aliens</h1>
      <Menu />
      <section className="content">
        <ViewSwitch />
      </section>
    </main>
  );
}

export default Root;
