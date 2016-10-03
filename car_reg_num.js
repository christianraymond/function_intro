var isFrom = function(letter, number){
  if (letter.startsWith('C') || letter.endsWith('12')){
    return "It's from Paarl"
  }
  else {
    return "It's from Capetown";
  }
};

var chePlate = isFrom('CJ 98912', 'CJ');
console.log(chePlate);
