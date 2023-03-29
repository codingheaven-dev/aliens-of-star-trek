import { useAtomValue, useSetAtom } from "jotai";
import {
  dataAtom,
  seriesFilterAtom,
  toggleSeriesFilterAtom,
} from "../../data/DataProvider";

function AlienSeries() {
  // Atomic
  const { series } = useAtomValue(dataAtom);
  const seriesFilter = useAtomValue(seriesFilterAtom);
  const toggleSeriesFilter = useSetAtom(toggleSeriesFilterAtom);

  // // Store
  // const { series, seriesFilter, toggleSeriesFilter } = useAppContext(() => {
  //   series, seriesFilter, toggleSeriesFilter;
  // });

  return (
    <div className="filters-checkboxes">
      Show only aliens from
      {series.map(({ title, shortCode }) => (
        <label key={shortCode} className="filters-checkbox">
          <input
            type="checkbox"
            checked={seriesFilter.includes(shortCode)}
            onChange={() => toggleSeriesFilter(shortCode)}
          />
          <abbr title={title}>{shortCode}</abbr>
        </label>
      ))}
    </div>
  );
}

export default AlienSeries;
