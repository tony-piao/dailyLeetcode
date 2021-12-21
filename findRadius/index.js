/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  const diffs = []
  for (let index = 0; index < houses.length; index++) {
    const house = houses[index];

    const distances = []
    for (let j = 0; j < heaters.length; j++) {
      const heat = heaters[j];

      distances.push(Math.abs(house-heat))
    }

    diffs.push(Math.min(distances))
	}

  return Math.max(diffs)
};