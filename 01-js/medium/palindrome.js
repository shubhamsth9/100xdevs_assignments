/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isAlphabet(ch){
  if(ch >= 'a' && ch <= 'z' ){
    return true;
  }
  return false;
  // if('qwertyuiopasdfghjklzxcvbnm'.includes(ch)){
  //   return true;
  // }
  // return false;
}

function isPalindrome(st) {
  let str = st.toLowerCase();
  let i = 0, j = str.length - 1;
  while(i < j){
    if(isAlphabet(str[i]) && isAlphabet(str[j])){
      if(str[i] === str[j]){
        i += 1;
        j -= 1;
      }
      else return false;
    } else if(!isAlphabet(str[i])){
      i +=1;
    } else{
      j -=1;
    }
  }
  // return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
  return true;
}

module.exports = isPalindrome;
