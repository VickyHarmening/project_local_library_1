/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  acc = 0;
  let totalKm = parks.reduce((kmTotal, area) => kmTotal + area.areaInSquareKm, acc);
  return (totalKm);
}

function parkNameAndState(parks) {
  const byName = parks.reduce((nameParks, park) => {nameParks[park.name] = park.location.state; return nameParks;}, {});
  return(byName);
}

function parkByState(parks) {
  const byState = parks.reduce((stateParks, park) => {stateParks[park.location.state] = park; console.log(stateParks); return stateParks;}, {});
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
