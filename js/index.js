// function filterAndMap(arg) {
//   let res = arg.filter(function (value) {
//     return value.length >= 5
//   })

//   res = res.map(function (value) {
//     value = value[0].toUpperCase() + value.slice(1)
//   })

//   return res
// }




// let students = [
//   { name: "john", age: 20 },
//   { name: "Doe", age: 18 },
//   { name: "Diaz", age: 25 },
//   { name: "Brahim", age: 20 },
//   { name: "Alex", age: 24 },
//   { name: "David", age: 12 },

// ]
// function studentsFil(arg) {
//   let res = arg.filter(function (value) {
//     return value.age >= 18
//   })
//   return res;
// }
// console.log(studentsFil(students));



// Object metodlari

// let car = {
// name: "BMW",
// year: 2023,
// color: "black"
// }

// kalitlarini massivga chiqarish
// let keys = Object.keys(car)

// qiymatlarini chiqarish
// let values = Object.values(car)

//
// let entries = Object.entries(car)
// console.log(entries);



// function User(name, age) {
//   this.name = name;
//   this.age = age
// }

// let hayotbek = new User("Hayotbek", 15)
// console.log(hayotbek);


// class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let John = new User('John', 23)

console.log(John);
