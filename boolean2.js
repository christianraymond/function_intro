var isTuesday = function(day){
  if (day.startsWith('Tu') && day.endsWith('day')){

    return "It's Tuesday!"
  }
else {
  return new Date();
  }
};

var chekDay = isTuesday('Thurday');
console.log(chekDay);

//I found this usefull too.
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = mm+'/'+dd+'/'+yyyy
console.log(today);
