function myMap(inputArray, callback) {
  let newArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    let el = inputArray[i];
    newArray.push(callback(el));
  }
  return newArray;
}
let result1 = myMap([100, 25, 81, 64], Math.sqrt)
console.log(result1);
module.exports = myMap;
