function sortWords(words) {
  words.sort((wordA, wordB) => (wordA > wordB ? 1:-1));
  return(words);
}

function sortNumbers(numbers) {
  numbers.sort((numberA, numberB) => (numberA - numberB));
  return(numbers);
}

function largestFirst(numbers) {
  numbers.sort((numberA, numberB) => (numberB - numberA));
  return(numbers);  
}

function sortFlowersByZone(flowers) {
  flowers.sort((flowersA, flowersB) => (flowersA.zone - flowersB.zone));
  return(flowers);
}

function sortByLength(strings) {
  strings.sort((stringsA, stringsB) => (stringsA.length - stringsB.length));
  return(strings);
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};
