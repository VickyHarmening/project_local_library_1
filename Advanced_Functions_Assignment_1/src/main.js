/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {  
  let result = parks.filter((park) => park.location.state === state);
  console.log(result);
  return(result); 
}



function getWishlistParksForUser(parks, users, name) {
  let tempList = [];
  let tempArray = [];

  for (keys in users) {
    if (users.keys === name) {
      tempList = users.wishlist;
    }
  } else {
    for (i = 0; i < tempList.length; i++) {
    tempArray += parks[tempList];
    }
  }
  return(tempArray);
}

function userHasVisitedAllParksInState() {}

function userHasVisitedParkOnWishlist() {}

function getUsersForUserWishlist() {}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
