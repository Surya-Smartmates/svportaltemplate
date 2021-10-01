// filter recorddata against filterFieldNames
const filterItems = (data, search = "", filterFieldNames) => {
  if (!search) return data;

  console.log({ data, search, filterFieldNames });
  let filteredItems = data.filter((item) => {
    let itemFound;

    filterFieldNames.forEach((fieldName) => {
      if (
        item[fieldName] &&
        item[fieldName]
          .toUpperCase()
          .trim()
          .includes(search.toUpperCase().trim())
      ) {
        itemFound = item;
      }
    });
    if (itemFound) return item;
  });

  console.log({ filteredItems });
  return filteredItems;
};
export default filterItems;
