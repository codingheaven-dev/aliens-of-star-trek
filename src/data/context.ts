import { createContext } from "use-context-selector";
import { AlienRace, Series, Shortcode, View } from "../types";

export interface DataContextType {
  state: {
    series: Series[];
    aliens: AlienRace[];
    view: View;
    currentSeries: Shortcode | null;
    currentAlien: AlienRace["name"] | null;
    filteredAliens: AlienRace[];
    seriesFilter: Shortcode[];
    alienQuery: string | null;
  };
  actions: {
    setView: (view: View) => void;
    setCurrentSeries: (series: Shortcode | null) => void;
    setCurrentAlien: (alien: AlienRace["name"] | null) => void;
    toggleSeriesFilter: (shortcode: Shortcode) => void;
    setAlienQuery: (query: string | null) => void;
  };
}

const DataContext = createContext<DataContextType | null>(null);
export default DataContext;
