import { useData } from "../../data";

function AlienSeries() {
  const { series, seriesFilter, toggleSeriesFilter } = useData(
    ({ state: { series, seriesFilter }, actions: { toggleSeriesFilter } }) => ({
      series,
      seriesFilter,
      toggleSeriesFilter,
    })
  );
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
