
// function funcLoop(x){
//     if(x >= 10) return;

//     console.log(`In func on iter ${x}`);

//     funcLoop(x + 1);
// }
// funcLoop(0);

/* function sumArr(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

var arr= [1, 2, 3, 4, 5];
console.log(sumArr(arr)); */

 function calcDiff(arr) {
    if (arr.length < 2) {
        return 0;
    }

    var firstElement = arr[0];
    var remainingDifference = calcDiff(arr.slice(1));

    return Math.abs(firstElement - remainingDifference);
}

var arr = [10, 5, 2, -1];
var difference = calcDiff(arr);
console.log(difference);  

/* function findClosestPairs(matrix) {
    let closestPairs = [];

    for (let row of matrix) {
        let minDiff = Infinity;
        let pair = [];
 
        for (let i = 0; i < row.length; i++) {
            for (let j = i + 1; j < row.length; j++) {
                let diff = Math.abs(row[i] - row[j]);
                
                if (diff < minDiff) {
                    minDiff = diff;
                    pair = [row[i], row[j]];
                }
            }
        }
     
        closestPairs.push(pair);
    }
    
    return closestPairs;
}

let matrix = [
    [1, 5, 9],
    [3, 7, 2],
    [8, 4, 6]
];
let closestPairs = findClosestPairs(matrix);

closestPairs.forEach(pair => {
    console.log(pair.join(' '));
}); */