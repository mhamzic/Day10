// Create lion object here

var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};

// End of lion object

// Only change code below this line

function myFunction(myPropName, myPropValue) {
  lion[myPropName] = myPropValue;
  return lion;
}

// Only change code above this line

console.log(myFunction("roar", "roar-roar"));

myFunction("roar", "roar-roar");

module.exports = myFunction;
