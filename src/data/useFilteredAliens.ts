import { useCallback, useMemo, useState } from "react";
import { AlienRace, Shortcode } from "../types";

function useFilteredAliens(aliens: AlienRace[]) {
  const [seriesFilter, setSeriesFilter] = useState<Shortcode[]>([]);
  const toggleSeriesFilter = useCallback(
    (shortcode: Shortcode) =>
      setSeriesFilter((oldFilter) =>
        oldFilter.includes(shortcode)
          ? oldFilter.filter((s) => s !== shortcode)
          : oldFilter.concat([shortcode])
      ),
    []
  );
  const [alienQuery, setAlienQuery] = useState<string | null>(null);

  const filteredAliens = useMemo(() => {
    if (seriesFilter.length === 0 && alienQuery === null) {
      return aliens;
    }
    return aliens
      .filter((a) =>
        seriesFilter.length
          ? seriesFilter.every((shortCode) =>
              a.series.some((s) => s.shortCode === shortCode)
            )
          : true
      )
      .filter((a) =>
        alienQuery != null
          ? [a.name, a.planet].some((txt) =>
              txt?.toLowerCase().includes(alienQuery)
            )
          : true
      );
  }, [aliens, seriesFilter, alienQuery]);

  return {
    filteredAliens,
    seriesFilter,
    alienQuery,
    toggleSeriesFilter,
    setAlienQuery,
  };
}

export default useFilteredAliens;
