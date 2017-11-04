function slugify(str) {
  if (typeof str !== 'string') {
    return null;
  }

  return str
    .split(' ')
    .map(substr => substr.toLowerCase())
    .join('-');
}

export default slugify;
