// function filterAndMap(arg) {
//   let res = arg.filter(function (value) {
//     return value.length >= 5
//   })

//   res = res.map(function (value) {
//     value = value[0].toUpperCase() + value.slice(1)
//   })

//   return res
// }




let students = [
  { name: "john", age: 20 },
  { name: "Doe", age: 18 },
  { name: "Diaz", age: 25 },
  { name: "Brahim", age: 20 },
  { name: "Alex", age: 24 },
  { name: "David", age: 12 },

]
function user(arg) {
  let userage = arg.find(function (value) {
    return value.age >= 20
  })
  let res = userage ? user.name.toUpperCase() : "Bunday talaba topilmadi"
  return res;
}
console.log(user(students));
