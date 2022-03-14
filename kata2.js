const conditionalSum = function(values, condition) {
  let oddSum = 0;
  let evenSum = 0;
  for(let i = 0; i< values.length;i++){
    if (values[i] % 2 == 1){
      oddSum += values[i];
    }
    else{
      evenSum += values[i];
    }
  }
  switch(condition){
    case "odd":
      return oddSum;
    case "even":
      return evenSum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));