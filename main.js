// let numbers = [2, 7, -4, 10, 20, 11, 10];
//
// const average = (arr) => {
//     return arr.reduce((acc, it, index) => {
//         if (index % 2 === 0 && index > 0) {
//             acc += it;
//         }
//         return acc;
//     }, 0)
// };
//
//
// const findMax = (arr) => {
//     let max = -Infinity;
//     for (let tar of arr) {
//         if (tar > max) {
//             max = tar
//         }
//     }
//     return max;
// };
//
// const m = [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
// ];
//
// function matrixElementsSum(matrix) {
//     let count = 0;
//     for (let artaqin = 0; artaqin < matrix.length; artaqin ++) {
//         for (let nerqin = 0; nerqin < matrix[artaqin].length; nerqin ++) {
//             if (matrix[artaqin][nerqin] === 0 && artaqin < matrix.length - 1) {
//                 matrix[artaqin + 1][nerqin] = 0;
//             }
//             count += matrix[artaqin][nerqin];
//         }
//     }
//     return count;
// }
// matrixElementsSum(m);

// const average = (arr) => arr.reduce((acc, item) => acc += item, 0)/ arr.length;
//
// const generateArray = (n) => {
//     let zang = [];
//     for (let i = 0; i < n; i++) {
//         const rand = Math.round(Math.random() * 10)
//         zang.push(rand)
//     }
//     console.log(zang, 'zang')
//     return zang;
// }
//
// const artadryal = (n) => average(generateArray(n)) * average(generateArray(n));
//
// console.log(artadryal(10), 'z(10)')
