/**
 * Take a number and add leading zero to it if required
 * @param {number} value - secs/mins/hrs/days/yrs
 * @returns {string} string with leading 0
 */
export const zeroPad = (value) => {
  if (value < 10) {
    return '0' + value;
  } else {
    return value.toString();
  }
};
