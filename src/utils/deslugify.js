function deslugifyPath(str) {
  if (typeof str !== "string") {
    return null;
  }
  return str
    .replace("/", "")
    .split("-")
    .map(
      substr => `${substr[0] ? substr[0].toUpperCase() : ""}${substr.slice(1)}`
    )
    .join(" ");
}

export default deslugifyPath;
