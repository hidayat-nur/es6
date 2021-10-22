// immutable
const x = 10
// x = 6 // error
console.log(x)


// variable reference const is muttable
const y = { name: 'hidayat' }
y.name = 'nur'
console.log(y)
// y = { name: 'nur' } // error, coz not reference


// make variable ref const to immutable
const h = Object.freeze({ name: 'hidayat' })
h.name = 'nur'
console.log(h) // still hidayat


// when freeze property object is immutable, but object ref by property is muttable
const g = Object.freeze({
  name: 'hidayat',
  address: {
    city: 'kebumen',
    province: 'central java',
    country: 'indonesia'
  }
})

g.name = 'nur' // immutable
g.address.city = 'yogyakarta' // muttable
console.log(g)


const k = [5,6,7]
for (let i of k) {
  i++
  console.log(i)
}

const d = [5,6,7]
for (const e of d) {
  // e++ // error
  console.log(e)
}

// const in impeartive loop not work
// for (const i = 0; i < 10; i++) {
//   console.log(i)
// }