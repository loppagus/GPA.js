//p5.GPA.js is a general use library with verious functions that will help with 
//converstions and usefull short cuts

//convert celsius to fahrenheit
function ctf(temp) {
  var out = temp * 1.800 + 32;
  return out;
}

//convert fahrenheit to celsius
function ftc(temp) {
  var out = (temp-32)/ 1.800;
  return out;
}

//convert kelvin to celsius
function ktc(temp){
  var out = (temp-273.15);
  return out;
}

//convert kelvin to fehrenheit
function ktf(temp){
  var out = (temp*(9/5))-459.67;
  return out;
}

//convert km to miles
function kmtm(km){
  var out = km * 0.62137;
  return out;
}

//convert miles to km
function mtkm(mile){
  var out = (mile / 0.62137);
  return out;
}

