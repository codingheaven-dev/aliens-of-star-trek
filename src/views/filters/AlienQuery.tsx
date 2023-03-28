import { ChangeEvent, memo, useCallback } from "react";
import { useData } from "../../data";

function AlienQuery() {
  const { alienQuery, setAlienQuery } = useData(
    ({ state: { alienQuery }, actions: { setAlienQuery } }) => ({
      alienQuery,
      setAlienQuery,
    }),
    true
  );

  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setAlienQuery(value === "" ? null : value),
    [setAlienQuery]
  );

  return (
    <label className="filters-search">
      Search:{" "}
      <input
        type="search"
        className="filters-search-field"
        value={alienQuery || ""}
        onChange={handleChange}
      />
    </label>
  );
}

export default memo(AlienQuery);
