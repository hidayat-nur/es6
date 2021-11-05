function add(a = 1, b = 2) {
  // console.log("a", a)
  // console.log("b", b)
  return a + b
}

// console.log(add()) //3
// console.log(add(2)) //4
// console.log(add(b=5)) //7 argumen b to be param a
// console.log(add(b=5,a=7)) //12 argumen b to be param b, argumen b to be param a
// console.log(add(null, 10)) //10
// console.log(typeof (null+90)) //number
// console.log(add(undefined, 20)) //21 undefined like not pass argument

function addObj({ name = 'hidayat', city = 'kebumen' }) {
  return `i am ${name} from ${city}`
}

// console.log(addObj({})) //i am hidayat from kebumen
// console.log(addObj({ name: 'mark' })) //i am mark from kebumen
// console.log(addObj({ city: 'england' })) //i am hidayat from england