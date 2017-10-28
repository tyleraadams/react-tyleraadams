import deslugifyPath from "./deslugify";

function findEntry(collection, path) {
  return collection.reduce((acc, currVal, currIndex) => {
    console.log(deslugifyPath(path));
    if (currVal.hed === deslugifyPath(path)) {
      return currIndex;
    } else {
      return acc;
    }
  }, null);
}

export default findEntry;
