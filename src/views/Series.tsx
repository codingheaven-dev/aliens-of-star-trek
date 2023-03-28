import { Row, Table, Header } from "../table";
import { useData } from "../data";
import type { Series as SeriesType } from "../types";
import { TableField } from "../table/types";

function getYearRange({ startYear, endYear }: SeriesType) {
  return endYear ? `${startYear}-${endYear}` : `${startYear}-current`;
}

const SERIES_FIELDS: TableField<SeriesType>[] = [
  { name: "Title", value: "title", variant: "left" },
  { name: "Type", value: "seriesType" },
  { name: "Years", value: getYearRange },
  { name: "Short code", value: "shortCode", variant: "mono" },
  { name: "Number of episodes", value: "numEpisodes" },
];

function Series() {
  const { currentSeries, series, setCurrentSeries } = useData(
    ({ state: { series, currentSeries }, actions: { setCurrentSeries } }) => ({
      currentSeries,
      series,
      setCurrentSeries,
    }),
    true
  );
  return (
    <Table>
      <Header fields={SERIES_FIELDS} />
      <tbody className="data-body">
        {series.map((row, index) => (
          <Row
            key={row.shortCode}
            isZebra={index % 2 === 1}
            item={row}
            fields={SERIES_FIELDS}
            onClick={() =>
              setCurrentSeries(
                currentSeries === row.shortCode ? null : row.shortCode
              )
            }
            className={
              currentSeries === row.shortCode ? "data-row--highlight" : ""
            }
          />
        ))}
      </tbody>
    </Table>
  );
}
export default Series;
