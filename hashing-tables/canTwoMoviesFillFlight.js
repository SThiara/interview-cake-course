function canTwoMoviesFillFlight(movieLengths, flightLength) {

  const moviesHash = {}

  for (const movieTime of movieLengths) {
    if (moviesHash[movieTime]) {
      return true
    }
    moviesHash[flightLength - movieTime] = true
  }
  
  return false;
}

canTwoMoviesFillFlight([2, 4], 6);