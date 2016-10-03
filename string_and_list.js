var countRegNumber = function(string){
  var array = string.split(",");
  console.log(array)
  var number = array.length;
  console.log(number);

}

countRegNumber('CA 182736,CY 523519,CJ 812328,CA 304 108');
countRegNumber('CA 42665, AA 12 RT GP,CA 378 983');


// var autoAlarm = function(tommorow){
//
//   if (tommorow.startsWith('S') && tommorow.endsWith('day')) {
//     return '8:00am';
//   }
//   else{
//   return '05:00am';
//   // console.log(tommorow);
// }
// };
//
// // var upTime = autoAlarm('Saturday');
// var upTime = autoAlarm('Samekhelo');
// var upTime = autoAlarm('Saturdaw');
// autoAlarm;
// console.log(upTime);
