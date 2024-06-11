// https://swe-docs.netlify.app/js/array-push-pop.html

/**
 * Given an array, take the last element and put it on the front
 *
 * e.g. ['x', 'y', 'z'] => ['z', 'x', 'y']
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with the last element at the front
 */
// to move to the front
//define array
// use "pop()" to shift 
export function arrayRotate(arr) {
  // TODO
  const lastArr = arr.pop()
  arr.unshift(lastArr)
  console.log (arr)
  return arr
}

//define array
//shift away pop()
//move back .shift
//

let TestArray = ['x', 'y', 'z']
let result = arrayRotate(TestArray)