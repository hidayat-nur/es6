// vairable scop
let a = 1
const b = true

if (b) {
  a = 2
}

console.log("a", a)


for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log("b", i)
  }, 1000)
}

for (let e = 0; e < 5; e++) {
  setTimeout(function() {
    console.log("c", e)
  }, 1000)
}


// TDZ (temporary deat zone)
{
  let log = function () {
    console.log("d", message)
  }

  // this is TDZ
  // log()

  let message= 'Hello'
  log()
}