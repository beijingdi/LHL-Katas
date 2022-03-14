const urlEncode = function(text) {
  let textArr = text.split("");
  while(textArr[0] == " "){
    textArr.shift();
  }
  while(textArr[textArr.length - 1] == " "){
    textArr.pop();
  }
  for (let i = 0; i < textArr.length; i++){
    if(textArr[i] === " "){
      textArr[i] = "%20";
    }    
  }
  return textArr.join("");
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));