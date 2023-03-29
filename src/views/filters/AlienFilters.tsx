import AlienQuery from "./AlienQuery";
import AlienSeries from "./AlienSeries";

function AlienFilters() {
  return (
    <div className="filters">
      <AlienQuery />
      <AlienSeries />{" "}
    </div>
  );
}

export default AlienFilters;
