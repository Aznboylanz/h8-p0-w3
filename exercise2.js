var array = ['apples', 'candies', 'steak'];
var first = array[0];
var second = array[1];
var third = array[2];
function reverseString(array){
  var word = ""
for(var i = array.length -1; i >= 0; i -- ){
  var word = word + array[i]
}
return word
}
console.log(reverseString(first))
