const encodeCursor = require('./encodeCursor');
/**
 *
 * @param {string} cursor
 * @param {object} node
 */
const generateEdgeObject = (cursor, node) => ({
  cursor: encodeCursor(cursor),
  node,
});

module.exports = generateEdgeObject;
