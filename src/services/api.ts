export const fetchData = async <T> (apiURL: string) => {
  const res = await fetch(apiURL);
  const data: Promise<T> = await res.json();
  return data;
};
