/**
 *
 * @function stringToArray - creates arrays for 'x' and 'y' coordinates
 * @param input string
 *
 */
function stringToArray(input) {
  const points = {
    x: [],
    y: []
  };
  input.split(',').forEach((elem, i) => {
    if (i % 2 === 0) {
      points.x.push(Number(elem));
    } else {
      points.y.push(Number(elem));
    }
  });
  return points;
}

/**
 *
 * @function findClosest - calculates the shortest distance between two pair of coordinates and returns the coordinates and their indexes
 * @param string string
 *
 */

function findClosest(string) {
  //lastDistance hold the shortest distance between two points
  let lastDistance = null;

  //lastDistanceElems holds the coordinates for the elems they closest to each other and ther index numbers
  const lastDistanceElems = {
    elemOne: null,
    elemTwo: null,
    indexes: null
  };

  //object to hold 'x' and 'y' points array
  const pointsObject = stringToArray(string);

  for (let i = 0; i < pointsObject['x'].length; i++) {
    for (let j = i + 1; j < pointsObject['x'].length; j++) {
      let calculation =
        Math.pow(pointsObject['x'][i] - pointsObject['x'][j], 2) +
        Math.pow(pointsObject['y'][i] - pointsObject['y'][j], 2);

      if (!lastDistance) lastDistance = calculation;

      if (lastDistance > calculation) {
        lastDistance = calculation;
        lastDistanceElems.elemOne = [
          pointsObject['x'][i],
          pointsObject['y'][i]
        ];
        lastDistanceElems.elemTwo = [
          pointsObject['x'][j],
          pointsObject['y'][j]
        ];
        lastDistanceElems.indexes = { elemOne: i, elemTwo: j };
      }
    }
  }
  return Math.sqrt(lastDistance), lastDistanceElems;
}

const closest = findClosest('50,50, 54,79, 90,100, 54,60, 10,12, 1,1');

console.log(closest);
