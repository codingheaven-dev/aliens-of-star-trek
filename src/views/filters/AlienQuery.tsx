import { useAtom } from "jotai";
import { ChangeEvent, memo, useCallback } from "react";
import { alienQueryAtom } from "../../data/DataProvider";

function AlienQuery() {
  const [alienQuery, setAlienQuery] = useAtom(alienQueryAtom);

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
