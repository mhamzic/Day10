function myFunction(myPropName) {
  // Only change code below this line
  var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar",
  };
  delete lion[myPropName];
  return lion;
  // Only change code above this line
}

myFunction("roar");

// console.log(myFunction("roar"));

module.exports = myFunction;
