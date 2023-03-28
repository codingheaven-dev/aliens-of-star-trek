import { useData } from "../data";
import { Header, Row, Table } from "../table";
import { TableField } from "../table/types";
import { AlienRace, Shortcode } from "../types";
import AlienFilters from "./filters";

const SHORTCODES: Shortcode[] = [
  "TOS",
  "TAS",
  "TNG",
  "DS9",
  "VOY",
  "ENT",
  "DIS",
  "PIC",
  "MOV",
];
const ALIEN_FIELDS: TableField<AlienRace>[] = [
  { name: "Name", value: "name", variant: "left" },
  {
    name: "Planet",
    value: ({ planet }) => (planet === null ? "" : planet),
    variant: "left",
  },
  ...SHORTCODES.map(
    (code): TableField<AlienRace> => ({
      name: code,
      value: ({ series }) =>
        series.some(({ shortCode }) => shortCode === code) ? "✅" : "",
    })
  ),
];

function Aliens() {
  const { currentAlien, aliens, setCurrentAlien } = useData(
    ({
      state: { filteredAliens, currentAlien },
      actions: { setCurrentAlien },
    }) => ({ aliens: filteredAliens, currentAlien, setCurrentAlien }),
    true
  );
  return (
    <>
      <AlienFilters />
      {aliens.length === 0 ? (
        <h2>Sorry, no aliens match your query. Try resetting filters.</h2>
      ) : (
        <Table>
          <Header fields={ALIEN_FIELDS} />
          <tbody className="data-body">
            {aliens.map((row, index) => (
              <Row
                key={row.name}
                isZebra={index % 2 === 1}
                item={row}
                fields={ALIEN_FIELDS}
                onClick={() =>
                  setCurrentAlien(currentAlien === row.name ? null : row.name)
                }
                className={
                  currentAlien === row.name ? "data-row--highlight" : ""
                }
              />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
export default Aliens;
