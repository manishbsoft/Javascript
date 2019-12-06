// Find duplicate values in an array.

// Examples find duplicates
// duplicates([1,2,5,7,2,4,5]) -> [2,5]
// duplicates([a,b,c,a,]) -> [a]

function duplicates(arr) {
    if(arr.filter){
        results= arr.filter(function(itm, i){
            return arr.lastIndexOf(itm) === i && arr.indexOf(itm)!== i;
        });
    }
    return results;    
}

// function removeDuplicates() {}

module.exports = duplicates;
