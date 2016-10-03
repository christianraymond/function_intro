var autoAlarm = function(tommorow){

  if (tommorow.startsWith('S') && tommorow.endsWith('day')) {
    return '8:00am';
  }
  else{
  return '05:00am';

}
};
 var upTime = autoAlarm('Saturday');
 var upTime = autoAlarm('Tuesday');
console.log(upTime);
