/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (de-obfuscate with ROT-20, there's a dropdown on http://rot13.com to select that)
If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '

*/

function isRotated(str1, str2) {
  if (!(str1.length === str2.length)) {
    return false
  }
  return str1.repeat(2).includes(str2);
}

console.log(isRotated('hello world', 'orldhello w'))