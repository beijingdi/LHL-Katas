const talkingCalendar = function(date) {
  const months = {'01':'January','02':'February','03':'March','04':'April','05':'May','06':'June','07':'July','08':'August','09':'September','10':'October','11':'November','12':'December'};
  let dateArray = date.split("/");
  let month = months[dateArray[1]];
  let day = "";
  if(dateArray[2].charAt(0) == "0"){
    dateArray[2] = dateArray[2].slice(1);
  }
  if(["1","21","31"].indexOf(dateArray[2]) > -1){
    day = dateArray[2] + "st";
  } else 
  if(["2","22"].indexOf(dateArray[2]) > -1){
    day = dateArray[2] + "nd";
  } 
  else{
    day = dateArray[2] + "th";
  }
  return month + " " + day + ", " + dateArray[0];
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
//November 11th, 2007
//August 24th, 1987
