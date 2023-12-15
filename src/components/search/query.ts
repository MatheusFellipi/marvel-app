export const query = (filter: string, value: string) => {
  let url = `${filter}?`;
  if (filter === "characters" || filter === "events") url += `nameStartsWith=${value}`;
  else if (filter === "comics" || filter === "series") url += `titleStartsWith=${value}`;
  return url
};
