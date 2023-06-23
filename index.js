function isLeap(isLeapYear) {
  isLeapYear = prompt("Enter year: ");
  divideBy4 = isLeapYear % 4 === 0; // check if year input is divisible by 4; true || false
  divideBy100 = isLeapYear % 100 === 0; // check if year input is divisible by 100; true || false
  divideBy400 = isLeapYear % 400 === 0; // check if year input is divisible by 400; true || false

  if (divideBy4 === true) {
    if (divideBy100 === true) {
      if (divideBy400 === true) {
        return isLeapYear + " IS a Leap Year";
      } else {
        return isLeapYear + " is NOT a Leap Year";
      }
    } else {
      return isLeapYear + " IS a Leap Year";
    }
  } else {
    return isLeapYear + " is NOT a Leap Year";
  }

  //return isLeap();
}
var result = isLeap();
alert(result);
