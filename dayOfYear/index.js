/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const _month = new Date(date).getMonth() + 1

  if(_month === 1) {
    return new Date(date).getDate()
  }

  let dayCount = 0;
  let dateArray = date.split('-')
  for (let index = 1; index < _month; index++) {
    dayCount = dayCount + new Date(`${dateArray[0]}-${index}`).getUTCDate()
  }

  return dayCount + new Date(date).getDate()
};