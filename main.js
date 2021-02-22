/*
       211
let num = [-2, -7, 10, 5, 3, -1];

let average = (arr) => {
    let pos = arr.filter(it => it > 0);
    return pos.reduce((acc, item) => {
       acc += item/pos.length
    return acc;
    }, 0)
}


console.log(average(num))


          // 214
let num = [-3, -6, 4, 5, 3, -9];

const average = (arr) => {
   let negative = arr.filter(it => it < 0)

   return negative.reduce((acc, item) => {
        acc -= item/negative.length
       return acc;
   }, 0)
}

 console.log(average(num))



            //215
let num = [-2, -7, 10, 5, 3, -1];

let tiv = (arr) => {
   return  arr.reduce((acc, item, index) => {
       if (index && index % 2 === 0 ) {
           acc += item
       }
       return acc
   }, 0);
}
console.log(tiv(num))



       //  216
let num = [1, 3, 14, 5, 3, 11];

let average = (arr) => {
    return arr.filter((it, index) =>  index && index % 2 === 0)
        .reduce((acc, item) => acc *= item, 1)

}
console.log(average(num))



/*          //217
let num = [-1, 3, 4, 5, 3, 2];

const average = (arr) => {
   return  arr.filter((it, index) => index % 2 !== 0 && index)
        .reduce((acc, item, index) => {
           acc *= item**2
            return acc;
        }, 1)
}

console.log(average(num))*/

/*
             263
let num = [-2, -7, 10, 5, 3, -1];
let num2 = [2, -4, 10, 5, 3, -1];

const positiveCount = (arr1, arr2) => arr1
    .concat(arr2)
    .filter(it => it > 0)
    .length;

const a1 = arr1.filter(it => it > 0 );
const a2 = arr2.filter(it => it > 0 );     (1)
return  a1.length + a2.length
   [...arr1, ...arr2] (2)

console.log(positiveCount(num, num2));

let num2 = [2, -7, 10, 5, 3, -1];

const num = (a = 5, b = 15, arr) => {
   return  arr
        .filter(it => it >= a && it <= b)
        .reduce((acc, it) => acc += it, 0)
}

 console.log(num(2, 8, num2))



              229
let num = [-1, -3, 4, 5, 3, -1];

const artadryal = (arr) => {
   return   arr.reduce((acc, item, index) => {
        if (item > index) {
            acc *= item
        }
        return acc;
    }, 1)
}
console.log(artadryal(num))
*/

/*        // 231
let num = [-1, 2, 4, 5, 3, -1];


let sum = (arr) => {
    return arr.filter(it => it % 2 === 0)
              .reduce((acc, item) => {
                acc += item ** 2;
                return acc;
        }, 0)
}
console.log(sum(num));*/

/*
         232
let num = [-1, -3, 4, 5, 6, -1];

let zuyg = (arr) => {
    return arr.filter(it => it % 2 === 0)
              .length
}

console.log(zuyg(num));*/

/*        // 233
let num = [-1, -3, 4, 5, 6, -1];

let sum = (arr) => {
    return arr.reduce((acc, item) => {
        if (item % 2 === 0) {
            acc.gumar += item;
            acc.artadryal *= item;
        }
        return acc
    }, {gumar: 0, artadryal: 1})
}

console.log(sum(num))*/

/*         // 234
let num = [2, 3, 4, 5, 6];

let average = (arr) => {
  return arr
      .filter(it => it % 2 !== 0)
      .reduce((acc, item, _, self) => {
           acc += item/self.length;
           return acc
       }, 0)
}
console.log(average(num))*/

/*        // 236
let num = [-1, 3, 4, 4, 6, 9, 1];

let fun = (arr) =>  {
  return   arr.reduce((acc, item, index, zangvac) => {
        if (item % 2 !== 0) {
            acc.qanak ++;
            acc.artadryal *= item
        }
        return acc;
    }, {qanak: 0, artadryal: 1})
}

console.log(fun(num));*/

/*        // 237
let num = [0, 3, 4, 0, 6, 9, 1];

let zero = (arr) => arr.filter(it => it === 0).length

console.log(zero(num)) */

/*    // 238
let num = [0, 3, 4, 3, 1, 9, 1];

let three = (arr) => {
   return  arr.filter(it => it % 3 === 0 && it)
        .reduce((acc, item, _, qanak) => {
            acc += item/qanak.length;
            return acc;
        }, 0)
}
console.log(three(num))*/

/*      // 240
let num = [0, 14, 4, 0, 6, 21, 1];

let seven = (arr) => arr.filter(it => it % 7 === 0 && it).length

console.log(seven(num))*/

/*       241
let num = [0, 3, 4, 0, 6, 8, 1];

let fun = (arr, k) => {
   return  arr.filter(it => it % k === 0 && it)
        .reduce((acc, item) => acc += item, 0)
}
console.log(fun(num, 2))*/

/*        // 242
let num = [0, 3, 4, 0, 6, 8, 1];

const fun = (arr, m) => {
  return   arr.filter(it => it % m === 0 && it)
        .reduce((acc, item) => acc *= item, 1);
}

console.log(fun(num, 2))*/

/*       // 243
let num = [0, 3, 4, 0, 6, 8, 1];

const fun = (arr, t) => {
  return   arr.filter(it => it % t === 0 && it).length
}

console.log(fun(num, 2))*/

/*      // 244
let num = [0, 3, 4, 0, 7, 8, 12];

let five = (arr) => {
  return   arr.reduce((acc, item) => {
        if (item % 5 === 2) {
            acc *= item;

        }
        return acc;
    }, 1)
}
console.log(five(num))*/

/*      // 245
let num = [3, 2, 0, 0, 0, 0, 0];

const fun = (arr) => {
  return   arr.reduce((acc, item, index) => {
        if ((item + index) % 3 === 0 ) {
            acc += item**2
        }
        return acc;
    }, 0)
}

console.log(fun(num));*/

/*   //    248
let num = [0, 3, 9, 3, 11, 16];

let fun = (arr, k) => {
   return  arr.reduce((acc, item, index) => {
        if (Math.pow((item + index), 2) % k === 0 ) {
            acc += item
        }
        return acc;
    }, 0)
}

console.log(fun(num, 2))*/

/*       // 249
let num = [0, 3, 6, 3, 11, 10];


let fun = (arr, k) => {
  return   arr.reduce((acc, item, index, self) => {
      if (Math.abs(item - index) > k ) {
         acc ++
      }
      return acc;
    }, 0)
}

console.log(fun(num, 4))
*/

/*     //  250

let num = [9, 8, 4 ];

let aragil = (arr) => {
   return  arr.reduce((acc, item, index, self) => {
        if ((item * index) % 3 === 2) {
            acc *= item**2
        }
        return acc;
    }, 1)
}

console.log(aragil(num))
*/

/*
       // 251
let num = [0, 3, 110, 3, 11, 16];
let biggest = (arr) => Math.max(...arr);

console.log(biggest(num))*/

/*      // 252
let num = [1, 3, 110, 3, 11, 16];
let biggest = (arr) => Math.min(...arr);
console.log(biggest(num))*/

/*       // 253
let num = [0, 3, 110, 3, 11, 16];
let sum = (arr) => {
    return Math.max(...arr) + Math.min(...arr)
}
console.log(sum(num))*/

/*
        //    255
let num = [0, 3, 110, 3, 11, 16];
let sum = (arr) => {
   const max = Math.max(...arr)
   return arr.indexOf(max) + max;
}

console.log(sum(num))*/

/*      // 257
let num = [0, 3, 110, 3, 110, 16];
let biggest = (arr) => {
 return    arr.indexOf(Math.max(...arr))
}
console.log(biggest(num))*/

/*     // 258
let num = [0, 3, 110, 3, 110, 16];
let big = (arr) => {
 return    arr.lastIndexOf(Math.max(...arr))
}
console.log(big(num))*/

/*         // 261
let num1 = [1, 3, 5];
let num2 = [4, 3, 2];

let average = (arr1, arr2) => {
  const a = arr1.reduce((acc, item, index, self) => {
    acc += item/self.length
    return acc;
  }, 0)

  const b = arr2.reduce((acc, item, index, self) => {
    acc += item/self.length
    return acc;
  }, 0)
  return a * b
}

console.log(average(num1, num2))*/

/*      // 263
let num1 = [1, 3, -1, 0];
let num2 = [4, -2, 0, 7];

let positive = (arr1, arr2) => {
return   arr1.concat(arr2)
        .filter(it => it > 0)
        .length
}
console.log(positive(num1, num2));*/



/*       // 265
let num1 = [1, 3, 5, 0];
let num2 = [4, 2, 3, 7];

let compute = (arr1, arr2) => {
  const a = arr1.reduce((acc, item) => acc += item, 0);

  const b = arr2.reduce((acc, item) => acc *= item, 1);

  return a - b
}

console.log(compute(num1, num2));*/



/*
       // 266
let num1 = [1, 3, 5, 0];
let num2 = [4, 2, 3, 7];

let average = (arr1, arr2) => {
  const a = arr1.reduce((acc, item) => {
        if (item % 2 !== 0) {
          acc += item
        }
        return acc;
  }, 0)

  const b = arr2.reduce((acc, item) => {
    if (item % 2 === 0) {
      acc += item
    }
    return acc;
  }, 0)

  return a- b
}
console.log(average(num1, num2))*/


/*       // 267
let num1 = [1, 3, 5, 1];
let num2 = [4, 2, 3, 7];

let seven = (arr1, arr2) => arr1
      .concat(arr2)
      .filter(it => it % 7 === 0)
      .length

console.log(seven(num1, num2));*/

/*       // 268
let num1 = [1, 3, 5, 0];
let num2 = [4, 2, 3, 4];

let fun = (arr1, arr2, k) => arr1
      .concat(arr2)
      .filter(it => it % k === 0)
      .length
console.log(fun(num1, num2, 2))*/

/*   //      269
let num1 = [1, 6, 5, 4];
let num2 = [4, 2, 3, 7];

let fun = (arr1, arr2) => {
  const zuyg = arr1.reduce((acc, item, index) => {
    if (index % 2 === 0 && index) {
      acc += item
    }
    return acc;
  }, 0)

  const kent = arr2.reduce((acc, item, index) => {
    if (index % 2 !== 0) {
      acc += item
    }
    return acc;
  }, 0)

  return zuyg + kent
}
console.log(fun(num1, num2))
*/


/*     // 280
let fun = (arr) => {
  return   arr.reduce((acc, item, index) => {
        acc.push(item)
        if (item === 'f') {
            acc.push(item)
        }
        return acc;
    }, [])
}
console.log(fun(['a', 'f', 'd', 'f']))*/


/*     // 271
let letters = ['a', 'x', 'g', 'a', 'y'];

let fun = (arr) => {
  return   arr.filter(it => it === 'a')
        .length
}

console.log(fun(letters))*/

      // 273
/*let letters = ['a', 's', 'x', 'g', 's', 'a', 'y', 's',];

let fun = (arr) => {
 return    arr.reduce((acc, item, index) => {
       if (item === 's') {
           acc += index
       }
       return acc;
    }, 0)
}
console.log(fun(letters))

   // 278
let letters = ['f', 'x', 'r', 'f', 'y'];

let fun = (arr) => {
  return   arr.filter((it,ind) => ind % 2 !== 0)
}
console.log(fun(letters))*/


/*
let sumTo = (n) => {
    let result = 0;
    for (let i = n; i > 0; i--) {
        result += i;
    }
    return result;
}

console.log(sumTo(5))*/

/*

let factorial = (n) => {
    if (n === 1) return 1;
  return n * factorial(n - 1)
}
console.log(factorial(5))*/


//: 1, 1, 2, 3, 5, 8, 13, 21



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


/*let company = {
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

console.log(sum, 'sum')*/


/*
let sumTo = (n) => {
    if (n === 1) return 1;
    return n + sumTo(n - 1)
}

console.log(sumTo(100))*/


/*
let factorial = (n) => {
    // if (n === 1) return 1;
    return n * factorial(n - 1);
}
    console.log(factorial(5))
*/

// 0, 1, 1, 2, 3, 5

// function fib(n, l) {
//     console.log(n, l);
//     return n <= 1 ? n : fib(n - 1, 'a') + fib(n - 2, 'b');
// }
//
// console.log(fib(3, 'init'))


/*
function t() {
    console.log('hiiiiiiiiiii')
}



let a = setTimeout(() => {
   a = setTimeout(t, 2000)
}, 2000) */




/*const ti = {
    name: 'tiko',
    speak() {
        alert('hello ' + this.name);
    }
}


const v = {
    name:'varp',
}


function noname(surname, age) {
    console.log(this)
    console.log('bye ' + this.name + ' ' + surname + age);
}

// ti.speak.call(v);


const jivaro = noname.bind(v, 'manukyan', 22);*/



//      725

/*const studs = [
    {name: 'varo', lastname: 'manukyan', rating: 3},
    {name: 'tikov', lastname: 'manukyan', rating: 6},
    {name: 'toffee', lastname: 'manukyan', rating: 5},
];
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].rating / arr.length
    }

    return arr
        .filter((item) =>item.rating > sum)
        .map((it) => `${it.name} (${it.rating})`);
}
console.log(average(studs));*/
//                724
/*const studs = [
    {name: 'varo', lastname: 'manukyan', absence: 3},
    {name: 'tikov', lastname: 'manukyan', absence: 6},
    {name: 'toffee', lastname: 'manukyan', absence: 5},
];

function  mostAbsence(arr) {
    let max = {absence: 0}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].absence > max.absence) {
            max = arr[i];
        }
    }
    return {name: max.name,lastname: max.lastname};
}
console.log(mostAbsence(studs))*/





/*      // 726
const studs = [
    {name: 'varo', lastname: 'manukyan', rating: 12},
    {name: 'tikov', lastname: 'manukyan', rating: 9},
    {name: 'toffee', lastname: 'manukyan', rating: 21},
];

function positive (arr)  {
  return   arr.filter((stud) => stud.rating > 10 && stud.rating <= 20)
        .map((stud) => `${stud.name} ${stud.lastname}`);
}

console.log(positive(studs));*/



/*     //    727
const studs = [
    {name: 'varo', number: 13, rating: 8},
    {name: 'tikov', number: 2, rating: 4},
    {name: 'toffee', number: 19, rating: 15},
];

function negativeRating(arr) {
   return  arr.filter((rate) => rate.rating > 0 && rate.rating < 10)
       .map((stud) => `Info: ${stud.name}  Number: ${stud.number}`)

}

console.log(negativeRating(studs))*/

/*     //   728
const studs = [
    {name: 'Varazdat', lastName: 'Manukyan', married: 1, kids: 1},
    {name: 'Tigran', lastName: 'Manukyan', married: 0, kids: 1},
    {name: 'Toffee', lastName: 'Manukyan', married: 0, kids: 0},
    {name: 'Lusik', lastName: 'Ohanjanyan', married: 1, kids: 1},
];

function domestic (arr) {
   return  arr.filter((person) => person.married > 0 && person.kids > 0)
       .map((person) => `Name: ${person.name} LastName: ${person.lastName}`);
}

console.log(domestic(studs))*/

/*      //     729
const studs = [
    {name: 'Varazdat', lastName: 'Manukyan', married: 1, kids: 1},
    {name: 'Tigran', lastName: 'Manukyan', married: 0, kids: 1},
    {name: 'Toffee', lastName: 'Manukyan', married: 0, kids: 0},
    {name: 'Lusik', lastName: 'Ohanjanyan', married: 1, kids: 1},
];

function kid (arr) {
    return   arr.filter((person) => person.kids > 0)
        .map((person) => {
            return {
                Info: `${person.lastName} ${person.name}`,
                'Kid(s)': `${person.kids}`,
            }
        });
}
console.log(kid(studs))*/

/*
        //     731
const studs = [
    {name: 'Varazdat', lastName: 'Manukyan', family: 4, salary: 50000},
    {name: 'Tigran', lastName: 'Manukyan', family: 3, salary: 30000},
    {name: 'Toffee', lastName: 'Manukyan', family: 6, salary: 40000},
    {name: 'Lusik', lastName: 'Ohanjanyan', family: 7, salary: 60000},
];

function sal(arr, G) {
  return   arr.filter((person) => person.salary / person.family > G)
      .map(person => {
          return {
             'Info (family)': `${person.name} (${person.family})`
          }
      });
}

console.log(sal(studs, 1000));*/

/*       //     732
const studs = [
    {name: 'Varazdat', lastName: 'Manukyan', family: 4, salary: 50000},
    {name: 'Tigran', lastName: 'Manukyan', family: 3, salary: 30000},
    {name: 'Toffee', lastName: 'Manukyanc', family: 6, salary: 40000},
    {name: 'Lusik', lastName: 'Ohanjanyan', family: 7, salary: 60000},
];


function searchLetter(arr) {
   return  arr.filter((person) => person.lastName.startsWith('M') && person.lastName.endsWith('n'))
       .map((person) => `${person.lastName} ${person.name}`);
}
console.log(searchLetter(studs))*/


const studs = [
    {name: 'Varazdat', lastName: 'Manukyan', currentRating: 12, finalRating: 12},
    {name: 'Tigran', lastName: 'Manukyan', currentRating: 16, finalRating: 17},
    {name: 'Toffee', lastName: 'Manukyanc', currentRating: 10, finalRating: 19},
    {name: 'Lusik', lastName: 'Ohanjanyan', currentRating: 14, finalRating: 16},
];

function strudents(arr) {
    return arr.reduce((acc, person) => {
      const total = person.currentRating + person.finalRating;
        if (total > 30 && total < 36) {
             acc.excellent.push(`${person.lastName} ${person.name}`);
        } else if (total > 24 && total < 31) {
             acc.good.push(`${person.lastName} ${person.name}`)
        } else if (total > 18 && total < 25) {
             acc.enough.push(`${person.lastName} ${person.name}`);
        }
        return acc;
    }, {excellent: [], good: [], enough: [],});
}
console.log(strudents(studs));











/*Array.prototype.forBeach = function (callback, self) {
    for (let i = 0; i < this.length; i++) {
        callback.apply(self, [this[i], i, this])
    }
}


const arr = ['varo', 'tiko'];

arr.forBeach(function (item, index, array) {

}, {a: 'a'})*/



