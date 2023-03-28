import { PropsWithChildren, useMemo, useState } from "react";
import { AlienRace, Shortcode, View } from "../types";
import DataContext from "./context";
import useFilteredAliens from "./useFilteredAliens";
import useJSON from "./useJSON";

function DataProvider({ children }: PropsWithChildren) {
  const [view, setView] = useState<View>("aliens");
  const { series, aliens } = useJSON();
  const [currentSeries, setCurrentSeries] = useState<Shortcode | null>(null);
  const [currentAlien, setCurrentAlien] = useState<AlienRace["name"] | null>(
    null
  );
  const {
    filteredAliens,
    seriesFilter,
    alienQuery,
    toggleSeriesFilter,
    setAlienQuery,
  } = useFilteredAliens(aliens);

  const value = {
    state: {
      series,
      aliens,
      view: useMemo(() => view, [view]),
      currentSeries,
      currentAlien,
      filteredAliens,
      seriesFilter,
      alienQuery,
    },
    actions: {
      setView,
      setCurrentSeries,
      setCurrentAlien,
      toggleSeriesFilter,
      setAlienQuery,
    },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
