function generateRandomInt(max) {
  return Math.round(Math.random() * max);
}

function generateRandomNonZero(max) {
  let result = 0;
  while (result === 0) {
    result = Math.round(Math.random() * max);
  }
  return result;
}

export {
  generateRandomInt, generateRandomNonZero,
};
