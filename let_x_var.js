var i = 10 // global anywhere

function a() {
  var b = 20 //global only in function
}

console.log(i)
// console.log(b) // error

// ----------------------------------------

for (var e = 1; e < 5; e++) {
  console.log(e)
}
console.log(e) // e is global

for (let z = 1; z < 5; z++) {
  console.log(z)
}
// console.log(z) // will error coz z not global


// ----------------------------------------

var j = 10
var j
console.log(j)

let o = 20
// let o
// console.log(o) // will error

// ----------------------------------------

function f() {
  console.log(message)
}
f() // no error
var message = 'halo'
f()


function k() {
  console.log(title)
}

// k() // will error, this TDZ
let title = 'halo'
k()