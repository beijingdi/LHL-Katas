let typeA = function(input){return console.log("typeA is printing" + input) };
let typeB = function(input){return console.log("typeB is printing" + input) };

let mainFunction = function (input,type) {
  type(input);
} 

mainFunction(" yay",typeA);