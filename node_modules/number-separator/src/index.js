function numberSeparator(number, intSeparator, decimalSeparator) {
  var str = number.toString();
  var i = str.length - 1;
  var j = 0;
  var float =
    str.indexOf(".") != -1 && typeof decimalSeparator != "undefined" ? 1 : 0;
  var separator = float
    ? decimalSeparator
    : typeof intSeparator != "undefined" ? intSeparator : " ";
  while (i >= 0) {
    if (str.charAt(i) == ".") {
      j = 0;
      i--;
      separator = typeof intSeparator != "undefined" ? intSeparator : " ";
    } else if (j % 3 == 0 && j != 0 && str.charAt(i) != ".") {
      str = str.slice(0, i + 1) + separator + str.slice(i + 1);
      j = 0;
    }
    j++;
    i--;
  }
  return str;
}

module.exports = numberSeparator;
