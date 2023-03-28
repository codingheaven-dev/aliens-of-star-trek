import { AlienRace, AlienRaceData, Series, SeriesData } from "../types";
import fetchData from "./fetchData";

const alienResource = fetchData<AlienRaceData[]>("./aliens.json");
const seriesResource = fetchData<SeriesData[]>("./series.json");

function useJSON() {
  const alienData = alienResource.read();
  const seriesData = seriesResource.read();

  const series = seriesData.map(
    (series): Series => ({ ...series, aliens: [] })
  );

  const seriesByShortcode = new Map(series.map((s) => [s.shortCode, s]));
  const aliens = alienData.map(
    ({ series: shortcodes, ...alienData }): AlienRace => {
      const alienSeries = shortcodes
        .map((shortcode) => seriesByShortcode.get(shortcode))
        .filter((s): s is Series => s !== undefined);
      return { ...alienData, series: alienSeries };
    }
  );

  return { aliens, series };
}

export default useJSON;
