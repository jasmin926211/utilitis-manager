/**
 *
 * @param {string} encodedCursor
 */
const decodeCursor = (encodedCursor) =>
  Buffer.from(encodedCursor, 'base64').toString('ascii');

module.exports = decodeCursor;
