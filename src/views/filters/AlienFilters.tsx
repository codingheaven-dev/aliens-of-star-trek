import AlienQuery from "./AlienQuery";
import AlienSeries from "./AlienSeries";

function AlienFilters() {
  return (
    <form className="filters">
      <AlienQuery />
      <AlienSeries />{" "}
    </form>
  );
}

export default AlienFilters;
