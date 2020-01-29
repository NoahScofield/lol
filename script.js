/Variables for lines within document /
var wrapperEle = document.body.querySelector(".wrapper");
var wrapperEle = document.body.querySelector(".wrapper1");
var wrapperEle = document.body.querySelector(".wrapper2");
var wrapperEle = document.body.querySelector(".wrapper3");
/User Input /
var mpy = Number(prompt("How many miles do you drive a year?"));
var cog = Number(prompt("What is the cost of gas in your are?"));
/Calculation + Wrapper Seletion /
function getGas(mpy,cog,mpg,wrapper) {
  var answer = (mpy/mpg) * cog;
  document.querySelector(wrapper).innerHTML = 
    "To drive a car with an MPG rating of " + mpg + " for " +  mpy +   " miles at " + cog + " per gallon would cost " + answer;
}

/Calling the functions /

getGas(mpy,cog,12, ".wrapper");
getGas(mpy,cog,17, ".wrapper1");
getGas(mpy,cog,26, ".wrapper2");
getGas(mpy,cog,29, ".wrapper3");