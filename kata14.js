const calculateChange = function(total, cash) {
  const currencies = {
    "Twenty dollars":2000,
    "Ten dollars":1000,
    "Five dollars":500,
    "Two dollars":200,
    "One dollar":100,
    "Quarter":25,
    "Dime":10,
    "Nickel":5,
    "Penny":1
  }
  let changeAmount = cash - total;
  let change = new Object;
  for(let i = 0; i < 9; i++){
    let count = Math.floor(changeAmount / currencies[Object.keys(currencies)[i]]);
    if(count > 0){
      change[Object.keys(currencies)[i]] = count;
      changeAmount = changeAmount % currencies[Object.keys(currencies)[i]];
    }   
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/
