/**
 *
 * @description - helper function
 * @function stringToArray - creates arrays for 'x' and 'y' coordinates
 * @param input string
 *
 */
function stringToArray(input) {
  const points = [];
  try {
    const elemsFromString = input.split(',');

    for (let i = 0; i < elemsFromString.length; i += 2) {
      points.push({
        x: Number(elemsFromString[i]),
        y: Number(elemsFromString[i + 1])
      });
    }
  } catch (e) {
    if (e instanceof TypeError) {
      console.log({
        expected: 'String',
        gotType: typeof input,
        message: e.message
      });
    } else {
      console.log(e);
    }
  }
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
    indexes: null,
    distance: null
  };

  //array to hold objects containing 'x' and 'y' points
  const pointsArray = stringToArray(string);

  for (let i = 0; i < pointsArray.length; i++) {
    for (let j = i + 1; j < pointsArray.length; j++) {
      let calculation =
        Math.pow(pointsArray[i]['x'] - pointsArray[j]['x'], 2) +
        Math.pow(pointsArray[i]['y'] - pointsArray[j]['y'], 2);

      if (!lastDistance) lastDistance = calculation;

      if (lastDistance > calculation) {
        lastDistance = calculation;

        lastDistanceElems.elemOne = [pointsArray[i]['x'], pointsArray[i]['y']];

        lastDistanceElems.elemTwo = [pointsArray[j]['x'], pointsArray[j]['y']];

        lastDistanceElems.indexes = { elemOne: i, elemTwo: j };
      }
    }
  }

  return { distance: Math.sqrt(lastDistance), elems: lastDistanceElems };
}

const closest = findClosest('50, 50, 54, 79, 90, 100, 54, 60, 10, 12, 1, 1');

console.log(closest);
