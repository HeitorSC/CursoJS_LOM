let a = 10;
let b = 20; // Passagem por valor
console.log(a); // 10
console.log(b); // 20
let c = a
console.log(c); // 10
a = 30
console.log(a); // 30
console.log(c); // 10
// Passagem por referência
let obj = {
    a: 1,
    b: 2
}
console.log(obj); // { a: 1, b:  }
let obj2 = obj
console.log(obj2); // { a: 1, b: 2 }
obj2.a = 3
console.log(obj); // { a: 3, b: 2 }
console.log(obj2); // { a: 3, b: 2 }