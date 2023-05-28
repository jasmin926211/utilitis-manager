/**
 *
 * @param {string} cursor
 */
const encodeCursor = (cursor) =>
  Buffer.from(cursor.toString()).toString('base64');
module.exports = encodeCursor;
