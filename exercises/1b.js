// https://tech-docs.corndel.com/js/array-slice.html

/**
 * Returns the middle elements of the array, without the first and last
 * elements.
 *
 * e.g. [4, 6, 1, 7, 9] => [6, 1, 7]
 *
 * @param {Array} arr - The array to process
 * @returns {Array} The array containing only the middle elements
 */
export function getMiddle(arr) {
  // TODO
  //define the array
  //use a slice to only get the middle elements 1, 6, and 7
 const result = arr.slice(1, -1)
 return result
 
 
}
let testarray = [4,6,1,7,9]
let result= getMiddle(testarray)
console.log (result)