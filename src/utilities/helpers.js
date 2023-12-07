const toCamelCase = (str) => {
  const words = str.toLowerCase().split('-');

  return words.reduce((a, b) => a + (b.charAt(0).toUpperCase() + b.slice(1)));
};

export default toCamelCase;
