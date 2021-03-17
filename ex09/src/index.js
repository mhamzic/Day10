function myFunction(myObj, checkProp) {
  // Only change code below this line
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
  return "Change Me!";
  // Only change code above this line
}

myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "song");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "genre");
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "actor");

module.exports = myFunction;
