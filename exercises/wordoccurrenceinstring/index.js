// Count the occurrence of each word in a phrase using javascript

// example
// 'I live in pune and I love Pune' --->  {"i":2,"live":1,"in":1,"pune":2,"and":1,"love":1}

/* function wordCount(str) {
  const obj = {};

  str.split(' ').forEach(function(el, i, arr) {
    el = el.toLowerCase();
    // obj[el] = obj[el] ? ++obj[el] : 1;
    obj[el] = obj[el] ? ++obj[el] : 1;
  });

  return obj;
} */

// using reduce and filter array helpers
function wordCount(str) {
  var arr = str.toLowerCase().split(' ');
  var filtered = arr.reduce((acc, item) => {

    var countEachItemInArray = arr.filter((str) => str === item).length;

    // assign counted values to accumulator for each item.
    acc[item] = countEachItemInArray;
    
    
    return acc;
  }, {})

  return filtered;
}


module.exports = wordCount;
