function palindrome(str, low, high) {
  while (low < high) {
    if (str.charAt(low) != str.charAt(high)) return false;
    low++;
    high--;
  }
  return true;
}

function SingleCharacterPalindrome(str) {
  let low = 0;
  let high = str.length - 1;
  while (low < high) {
    if (str.charAt(low) == str.charAt(high)) {
      low++;
      high--;
    } else {
      if (palindrome(str, low + 1, high)) return "remove one at index " + low;
      if (palindrome(str, low, high - 1)) return "remove one at index " + high;
      return "Not Possible";
    }
  }
  return "OK";
}


console.log(SingleCharacterPalindrome("abba")); // "OK"
console.log(SingleCharacterPalindrome("abbaa")); // "Remove One"
console.log(SingleCharacterPalindrome("abbaab")); // "Not Possible"
console.log(SingleCharacterPalindrome("madmam")); // "Remove One"
console.log(SingleCharacterPalindrome("raydarm")); // "Not Possible"
console.log(SingleCharacterPalindrome("hannah")); // "OK"