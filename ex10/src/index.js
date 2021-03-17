function myFunction() {
  var myMusic = {
    001: {
      artist: "David",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "David Bowie",
      title: "Space Oddity",
      release_year: 1969,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
  };
  return myMusic;
}
// console.log(myFunction()[2]);
myFunction()[2];
module.exports = myFunction;
