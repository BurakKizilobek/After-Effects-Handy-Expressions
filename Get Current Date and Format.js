// Useful snippet for getting current date

d = new Date(Date(0));
// Format Settings
divider = "/"
yearLength = 2; // use 2 for YY, 4 for YYYY

function padZeros(n){
  if(n <= 9){
    return "0" + n;
  }
  return n
}
yearTrim = (yearLength===2) ? 2 : 0;
"" + padZeros(d.getMonth()+1) + divider + padZeros(d.getDate()) + divider + d.getFullYear().toString().substring(yearTrim,4);