// 1-masala
// let arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// let sortedArr = [];
// arr.forEach((num) => {
//     let index = sortedArr.findIndex((val) => val > num);
//     if (index === -1) sortedArr.push(num);
//     else sortedArr.splice(index, 0, num);
// });
// console.log(sortedArr);


// // 2-masala

// let arr = [1, 6, 9, 5, 8, 10, 15];
// const rangeSum = (arr) => (start) => (end) => {
//     let sum = 0;
//     arr.forEach((num, index) => {
//         if (index >= start && index < end) sum += num;
//     });
//     return sum;
// };
// let getSum = rangeSum(arr);
// console.log(getSum(2)(5));

// 3-vazifa
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let newArr = [];
// arr.forEach((num) => {
//     if (!newArr.includes(num)) newArr.push(num);
// });
// console.log(newArr);

// 4-vazia   map

// let arr4 = [2, 7, 3, 9, 5];

// let max = arr4[0];
// let min = arr4[0];

// arr4.map((num) => {
//     if (num > max) max = num;
//     if (num < min) min = num;
// });

// console.log({ max, min });


// 6-vazifa

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];
// arr.forEach((value ,index) => {
//     reversedArr.unshift(arr[index]);
// });
// console.log(reversedArr);


// 7-vazifa

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// let oddCount = 0;
// arr.forEach((num) => {
//     if (num % 2 !== 0) {
//         console.log(num);
//         oddCount++;
//     }
// });
// console.log("Toq sonlar:", oddCount);


// 8-vazifa

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1]

// let oddArr = []
// arr.forEach((num , index) => {
//     if (index % 2 !==0 ) oddArr.push(num)      
// })
// console.log(oddArr);

// 9-vazifa

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1]
// let oddArr = []
// arr.forEach((num , index) => {
//     if (index % 2 !==0 ) oddArr.push(num)  
// })
// console.log(Math.max(...oddArr));

// 10-vazifa

// let arr = [3, 5, 2, 6, 9, 7, 1];

// let minIndex = arr.indexOf(Math.min(...arr));
// let maxIndex = arr.indexOf(Math.max(...arr));
// let start = Math.min(minIndex, maxIndex);
// let end = Math.max(minIndex, maxIndex);
// arr.forEach((_, index) => {
//     if (index > start && index < end) arr[index] = 0;
// });
// console.log(arr);


// 11-masala

// let n = 5;
// let oddNumbers = [];
// let num = 1;

// [...Array(n)].forEach(() => {
//     if (num % 2 !== 0) oddNumbers.push(num);
//     num++;
// });

// console.log(oddNumbers);



// 12-masala

// let arr = [22, 3, 5, 6, 3, 2, 3];
// let reversedArr = [];
// arr.forEach((_, index) => {
//     reversedArr.unshift(arr[index]);
// });
// console.log(reversedArr);


// 13-masala

// let arr = [3, 5, 6, 3, 2, 3];
// let newArr = [];

// arr.forEach((num) => {
//     if (!newArr.includes(num)) newArr.push(num);
// });
// newArr.sort((a, b) => a - b);
// console.log(newArr); 

