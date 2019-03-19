module.exports = function check(str, bracketsConfig) {
   var config = bracketsConfig.reduce(function(prev, curr) {
    prev[curr[0]] = curr[1];
    return prev;
  }, {})
	
  var arr = [], arrClose = [], current
  for (var i = 0; i < str.length; i++) {
    current = str[i]
    if (config[current] && !arr.includes(current)) {
      arr.push(current)
    } else {
      if (current !== config[arr.pop()] && arr.includes(current)) {
        arrClose.push(current)
      }
    } 
  }
  return arr.length == arrClose.length ? true : false
}