// Create school object here

var school = {
  name: "Arena",
  location: "Sarajevo",
  established: "2020",
};

// End of school object

// Only change code below this line

function myFunction(name) {
  school.name = name;
  return school;
}

// Only change code above this line

// console.log(myFunction("Paragon"));

myFunction("Paragon");

module.exports = { school, myFunction };
