const name="rajan "
const lastname="kumar";



//``-> backticks used for string interpolation-modern use;
console.log(`hello my name is ${name} and last name is ${lastname}`)

const getName=new String('rajang')

console.log(getName[0])
console.log(getName.toUpperCase())   
const newstr=getName.substring(0,4);
console.log(newstr);
//  charcode method
const str = "ABC";
console.log(str.charCodeAt(0)); // Output: 65

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // Output: Hello World



includes(substring, start)

Checks if a string contains a specified substring, starting from an optional index.
Example:
javascript
Copy code
const str = "Hello, World!";
console.log(str.includes("World")); // Output: true

lastIndexOf(substring, start)
Returns the index of the last occurrence of a substring, or -1 if not found.
Example:
const str = "Hello, World!";
console.log(str.lastIndexOf("o")); // Output: 8


slice(start, end)
Extracts part of a string and returns it as a new string.
Example:
const str = "JavaScript";
console.log(str.slice(0, 4)); // Output: Java


substring(start, end)
Similar to slice, but doesn’t accept negative indices.
Example:
const str = "JavaScript";
console.log(str.substring(0, 4)); // Output: Java

substr(start, length)
Returns a part of the string, starting from a specified index for a given length.
Example:
const str = "JavaScript";
console.log(str.substr(4, 6)); // Output: Script



