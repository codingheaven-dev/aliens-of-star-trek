import { atom } from "jotai";
import { AlienRace, Shortcode, View } from "../types";
import useJSON from "./useJSON";

export const viewAtom = atom<View>("aliens");

export const alienQueryAtom = atom<string | null>("alienQuery");

export const currentSeriesAtom = atom<Shortcode | null>(null);

export const currentAlienAtom = atom<AlienRace["name"] | null>(null);

export const dataAtom = atom(() => useJSON());

export const seriesFilterAtom = atom<Shortcode[]>([]);

export const toggleSeriesFilterAtom = atom(
  null, // it's a convention to pass `null` for the first argument
  (get, set, shortcode: Shortcode) => {
    const oldFilter = get(seriesFilterAtom);
    const newValue = oldFilter.includes(shortcode)
      ? oldFilter.filter((s) => s !== shortcode)
      : oldFilter.concat([shortcode]);

    set(seriesFilterAtom, newValue);
  }
);

export const filteredAliensAtom = atom((get) => {
  const seriesFilter = get(seriesFilterAtom);
  const { aliens } = get(dataAtom);
  const alienQuery = get(alienQueryAtom);

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
});
