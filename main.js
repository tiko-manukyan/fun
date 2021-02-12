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

// let sum = 1;
// for (let i = 0; i < n; i++) {
//     sum *= x
// }

// const pow = (x, n) => {
//     return n === 1 ? x : x * pow(x, n - 1);
//
// }
//
// console.time('pow')
// for (let i = 0; i < 100000; i++) {
//     pow(2, 4)
// }
// console.timeEnd('pow')


/*const fib = (x, start = [0, 1, 1, 2, 3, 5, 8, 13, 21]) => {
   // const start = [0, 1];
   // for (let i = 2; i < x; i++) {
   //     const fibNum = start[i - 2] + start[i - 1];
   //     if (fibNum < x) {
   //         start.push(start[i - 2] + start[i - 1]);
   //     } else {
   //         return start
   //     }
   // }

    const num = (start[start.length - 1]) + ( start[start.length - 2]);

    if (num < 100) {
        start.push(num);
        return fib(x, start);
    }
    return start;
}*/

// console.log(fib(100, ), 'powRec(2, 4)');


/*
const factorial = (n) => {
    if (n === 1) return  1
    return n * factorial(n- 1)

}
console.log(factorial(3), 'factorial(3)');
*/


let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],

    development: {
        sites: {
            testing: {
                auto: [
                    {
                        name: 'Peter',
                        salary: 2000
                    }, {
                        name: 'Alex',
                        salary: 1800
                    }],
                manual: [
                    {
                        name: 'Peter',
                        salary: 200
                    }, {
                        name: 'Alex',
                        salary: 180
                    }]
            }
        },

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

let sum = 0;
const calculateSal = (comp) => {
    if (comp.salary) {
        sum += comp.salary
    } else {
        for (let key in comp) {
            if (Array.isArray(comp[key])) {
                for (let i = 0; i < comp[key].length; i++) {
                    calculateSal(comp[key][i])
                }
            } else {
                calculateSal(comp[key])
            }
        }
    }
    
}

calculateSal(company)

console.log(sum, 'sum')
