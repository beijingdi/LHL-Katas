const instructorWithLongestName = function(instructors) {
  let winner = [];
  winner.name = "";
  winner.course = ""
  for(let instructor of instructors){
    if (instructor.name.length > winner.name.length){
      winner = instructor;
    }
  }
  return winner;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));