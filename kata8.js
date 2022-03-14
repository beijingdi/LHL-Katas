const repeatNumbers = function(data) {
  let Repeat = new Array;
  for (let i = 0; i < data.length; i++){
    Repeat.push(Array(data[i][1]).fill(data[i][0]).join(""));
  }
  return Repeat.join(",");

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));