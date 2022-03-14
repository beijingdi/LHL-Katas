const sumLargestNumbers = function(data) {
  let bgst = data[0];
  let smlst = data[0]; 
  for (let lg = 0; lg < data.length; lg++) {
    if (bgst < data[lg]) {
      bgst = data[lg];
    } 
  }; 
  for(let sm = 0; sm < data.length; sm++){
    if (smlst < data[sm] && data[sm] < bgst) {
      smlst = data[sm];
    }
  } 
  return bgst+smlst;
};
console.log(sumLargestNumbers([5,8,12,9]));
