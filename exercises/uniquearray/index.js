// How to Remove Array Duplicates in ES6
// Help Source - https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c




// [1,1,2,3,4,4]  ---> [1,2,3,4]

// using reduce and find array helper
/* function unique(array) {
  // iterate through array
  return array.reduce(function(acc, number) {
    // check if number coming into
    // array exists previously in the accumulator,
    // and if so do nothing, if not add to accumulator

    var findNumber = acc.find(function(previousValue) {
      return number === previousValue;
    });
    console.log(acc);
    findNumber ? acc : acc.push(number);
    return acc;
  }, []);
} */

// using reduce and includes array helper
/* numbers.reduce((unique, item) => {
  console.log(
    // a.item
    item,
    // b. Final array (Accumulator)
    unique,
    // c. Condition (Remember it only get pushed if this returns `false`)
    unique.includes(item) ? unique : [...unique, item]
  );

  return unique.includes(item) ? unique : [...unique, item]+;
}, []); */

// using filter array helper
/* function unique(array) {
    array.filter((item, index) => {
        console.log(
          // a. item
        item,
        // b. index
        index,
        // c. condition(if - index of array item === index)
        array.indexOf(item) === index
      )
      return array.indexOf(item) === index; 
      // If want to get duplicates then use -> array.indexOf(item) !== index;
    });
} */

// using set helper
function unique(array) {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
  // return Array.from(uniqueSet); // alternative way to convert set to array
}


module.exports = unique;
