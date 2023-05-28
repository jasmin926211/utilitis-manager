/* eslint-disable no-console */
/**
 *
 * @param {object} obj is the object you want to get the value from eg. {data:{user:{name:"Joe"}}}
 * @param {string} expression the nested expression to fetch the value eg. "data.user.name"
 *
 * @returns {any} result/undefined it returns undefined or the result based on the value available
 *
 *
 * @example getValue({data:{user:{name:"Joe"}},"data.user.name"); // Prints "Joe"
 */

const getValue = (obj, expression) => {
  try {
    return expression
      .split('.')
      .reduce((parentObject, currentObjectKey, index) => {
        if (index === 0) {
          return parentObject;
        }
        return typeof parentObject === 'undefined' ||
          parentObject === null
          ? undefined
          : parentObject[currentObjectKey];
      }, obj);
  } catch (e) {
    console.error('Failed to getValue => ', e);
    return undefined;
  }
};
module.exports = getValue;
