// Remove duplicate values in an array.
// https://wsvincent.com/javascript-remove-duplicates-array/

// Examples remove duplicates
// duplicates([1,2,5,7,2,4,5]) -> [1,2,4,5,7]
// duplicates([a,b,c,a]) -> [a,b,c]

function duplicates(arr) {
    // uniqueArray = [...new Set(array)];

    // alternative
    uniqueArray = a.filter(function(item, pos) {
        return a.indexOf(item) == pos;
    });

    return uniqueArray;
}

// function duplicates(a) {
//     var seen = {};
//     var out = [];
//     var len = a.length;
//     var j = 0;
//     for(var i = 0; i < len; i++) {
//          var item = a[i];
//          if(seen[item] !== 1) {
//                seen[item] = 1;
//                out[j++] = item;
//          }
//     }
//     return out;
// }

// function removeDuplicates() {}

module.exports = duplicates;
