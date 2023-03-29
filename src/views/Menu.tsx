import { useAtom } from "jotai";
import { viewAtom } from "../data/DataProvider";

function Menu() {
  const [view, setView] = useAtom(viewAtom);

  const buttons = [
    ["aliens", "Aliens"],
    ["series", "Series"],
  ] as const;
  return (
    <ul className="menu">
      {buttons.map(([id, name]) => (
        <li className="menu-item" key={id}>
          <button
            className={`menu-item-button ${
              view === id ? "menu-item-button--active" : ""
            }`}
            onClick={() => setView(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
