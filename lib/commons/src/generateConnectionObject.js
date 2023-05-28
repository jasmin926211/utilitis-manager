/**
 *
 * @param {number} totalCount
 * @param {array} edges
 * @param {object} pageInfo
 */
const generateConnectionObject = (totalCount, edges, pageInfo) => ({
  totalCount,
  edges,
  pageInfo,
});

module.exports = generateConnectionObject;
