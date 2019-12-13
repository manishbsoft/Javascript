
//  Recursion with Destructuring

// [1, 2, 3] -> [2,4,6]

// const numbers = [1, 2, 3];
function double( [number , ... rest] ) {
     if (rest.length === 0) {
      return [number *2];
    } else {
      return [number * 2, ...double(rest)];
    }  	
}

module.exports = double;
