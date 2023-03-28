import type { MutableRefObject } from "react";
import { useRef } from "react";
import { shallowEqualObjects } from "shallow-equal";
import { useContextSelector } from "use-context-selector";

import DataContext, { DataContextType } from "./context";

function identity<T>(a: T) {
  return a;
}

function useData(): DataContextType;
function useData<T>(selector: (ctx: DataContextType) => T): T;
function useData<T>(selector: (ctx: DataContextType) => T, isMulti: boolean): T;
function useData<T>(
  selector: (ctx: DataContextType) => T | DataContextType = identity,
  isMulti: boolean = false
): T | DataContextType {
  const ref: MutableRefObject<T | DataContextType | undefined> = useRef();

  const equalityFnCallback = (ctx: DataContextType | null) => {
    if (!ctx) {
      throw new Error("No context");
    }
    const selected = selector(ctx);
    if (
      ref.current &&
      ((isMulti && ref.current === selected) ||
        (!isMulti && shallowEqualObjects(ref.current, selected as {})))
    ) {
      return ref.current;
    }
    ref.current = selected;
    return selected;
  };

  // Update the selector fn to memoize the selected value by [equalityFn].
  return useContextSelector(DataContext, equalityFnCallback);
}

export default useData;
