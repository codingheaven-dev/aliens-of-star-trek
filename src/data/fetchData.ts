import wrapPromise from "./wrapPromise";

function fetchData<T>(url: string) {
  const promise: Promise<T> = fetch(url).then((res) => res.json());
  return wrapPromise(promise);
}

export default fetchData;
