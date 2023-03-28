export type SeriesType = "TV Series" | "Movies";
export type Shortcode =
  | "TOS"
  | "TAS"
  | "TNG"
  | "DS9"
  | "VOY"
  | "ENT"
  | "DIS"
  | "PIC"
  | "MOV";
export interface SeriesData {
  title: string;
  shortCode: Shortcode;
  seriesType: SeriesType;
  startYear: number;
  endYear: number;
  numEpisodes: number;
}
export interface Series extends SeriesData {
  aliens: AlienRace[];
}
export interface AlienRaceData {
  name: string;
  planet: string | null;
  series: Shortcode[];
}
export interface AlienRace extends Omit<AlienRaceData, "series"> {
  series: Series[];
}

export type View = "series" | "aliens";
