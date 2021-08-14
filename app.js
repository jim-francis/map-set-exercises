// Quick Question #1
// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]) //{1,2,3,4}

// Quick Question #2
// What does the following code return?
// [...new Set("referee")].join("")
//'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//{[1,2,3]: true, [1,2,3]: false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false 
// if that array contains a duplicate

const hasDuplicate = arr => {
    const dupeChecker = [...new Set(arr)]
    return arr.length === dupeChecker.length ? false : true
}

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where 
// the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = str => {
    const flat = str.toLowerCase();
    const vowels = 'aeiou';
    const map = new Map();
    for (let char of flat) {
        if (vowels.indexOf(char) !== -1 && map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else if (vowels.indexOf(char) !== -1) {
            map.set(char, 1)
        }
    }
    return map;
}