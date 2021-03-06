// var romanNumeral = function(number) {
var numeralI = function(number) {
    var romanNumeral = "";
    for(var i = 1; i <= number; i++){
      romanNumeral += "I";
    }
    return romanNumeral;
};

var numeralV = function(number) {
  var romanNumeral = [];

  if(number === 4) {
    romanNumeral.push("IV");
  } else {
    romanNumeral.push("V");
    var newNum = number - 5;
    romanNumeral.push(numeralI(newNum));
  }

  return romanNumeral.join("");
};

var numeralX = function(number) {
  var romanNumeral = [];

  if(number === 9) {
    romanNumeral.push("IX");
  } else {
    while (number >= 10) {
      romanNumeral.push("X");
      number -= 10;
    }
    if(number === 9) {
      romanNumeral.push("IX");
    }else if (number === 5) {
      romanNumeral.push("V");
    }else if (number < 4) {
      romanNumeral.push(numeralI(number));
    }else  {
      romanNumeral.push(numeralV(number));
    }
  }

  return romanNumeral.join("");
};

var numeralL = function(number) {
  debugger;
  var romanNumeral = [];

  if(number === 50) {
    romanNumeral.push("L");
  } else if (number < 50) {
      romanNumeral.push("XL");
      number -= 40;
      romanNumeral.push(numeralX(number));
    } else {
      romanNumeral.push("L");
      number -= 50;
      romanNumeral.push(numeralX(number));
    }
    return romanNumeral.join("");
};

var numeralC = function(number) {
  var romanNumeral = [];
  if(number === 90) {
    romanNumeral.push("XC");
  } else {
    while (number >= 100) {
      romanNumeral.push("C");
      number -= 100;
    }
    if(number === 90) {
      romanNumeral.push("XC");
    } else if (number === 50) {
      romanNumeral.push("L");
    } else if (number < 50) {
        romanNumeral.push("XL");
        number -= 40;
        romanNumeral.push(numeralX(number));
      } else {
        romanNumeral.push("L");
        number -= 50;
        romanNumeral.push(numeralX(number));
      }
      return romanNumeral.join("");
  }
};

var numeralD = function(number) {
  var romanNumeral = [];

  if(number === 400) {
    romanNumeral.push("CD");
  } else if (number >= 500) {
    romanNumeral.push("D");
    number -= 500;
    while (number >= 100) {
      romanNumeral.push("C");
      number -= 100;
  }
     if(number === 90) {
    romanNumeral.push("XC");
  } else if (number >= 50) {
    romanNumeral.push("L");
  } else if (number < 50) {
    romanNumeral.push("XL");
    number -= 40;
    romanNumeral.push(numeralX(number));
  } else {
    romanNumeral.push("L");
    number -= 50;
    romanNumeral.push(numeralX(number));
  }
  return romanNumeral.join("");

}
};
