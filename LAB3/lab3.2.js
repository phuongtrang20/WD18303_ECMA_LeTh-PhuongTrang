
let arr = [1, 2, 3, 4, 5, 6, 7];

const sumArray = (arr) => 
    arr.reduce((arr, item) =>
    arr + item, 0
    )
    console.log(sumArray(arr));