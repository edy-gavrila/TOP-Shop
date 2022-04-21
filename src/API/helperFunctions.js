const addCommasToPrice = (price) => {
  if (price.length < 3) {
    return;
  }
  const invertedPrice = price.split("").reverse();
  for (let i = 0; i < invertedPrice.length; i = i + 3) {
    if (i === 0) {
      continue;
    }
    invertedPrice.splice(i, 0, ",");
    i++;
  }
  return invertedPrice.reverse().join("");
};

export { addCommasToPrice };
