const encodeCursor = require('./encodeCursor');
/**
 *
 * @param {boolean} hasNextPage
 * @param {boolean} hasPreviousPage
 * @param {string} startCursor pass decoded cursor, encoding of cursor is done by this function
 * @param {string} endCursor pass decoded cursor, encoding of cursor is done by this function
 */
const generatePageInfoObject = (
  hasNextPage,
  hasPreviousPage,
  startCursor,
  endCursor,
) => ({
  hasNextPage,
  hasPreviousPage,
  startCursor: encodeCursor(startCursor),
  endCursor: encodeCursor(endCursor),
});

module.exports = generatePageInfoObject;
