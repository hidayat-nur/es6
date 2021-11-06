const a = [1,2,3]
const b = [4,5,6, ...a]
// console.log(b) // [4,5,6,1,2,3]

const c = [1,2,3]
const d = [4,5,6]
const e = [...c, ...d]
// console.log(e) //[ 1, 2, 3, 4, 5, 6 ]

const f = [c,d]
// console.log(f) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

const g = [c, ...d]
// console.log(g) // [ [ 1, 2, 3 ], 4, 5, 6 ]

function add (a, b) {
  return a+b
}

// console.log(add([1,7])) //1,7undefined
// console.log(add(...[1,7])) // 8


const name = ['hidayat', 'isna', 'andi']
const moreName = ['sarah', 'luna']

// name.push(moreName)
// console.log(name) //[ 'hidayat', 'isna', 'andi', [ 'sarah', 'luna' ] ]

// name.push(...moreName)
// console.log(name) // [ 'hidayat', 'isna', 'andi', 'sarah', 'luna' ]

// name.push(...moreName)
// name.push(moreName)
// console.log(name) //[ 'hidayat', 'isna', 'andi', 'sarah', 'luna', [ 'sarah', 'luna' ] ]


// Constructing array literal
const i = [1,2,3]
const j = [...i, 4,5,6]
// console.log(j) //[ 1, 2, 3, 4, 5, 6 ]


// Concatenating arrays
const k = [1,2,3]
const l = [4,5,6]
const m = [...k, ...l]
// console.log(m) // 1, 2, 3, 4, 5, 6 ]


// Copying an array
const n = [1,2,3]
const o = [...n] //this is copy
const p = n // reference

o.push(6)
p.push(8)
// console.log(n) [ 1, 2, 3, 8 ]
// console.log(o)[ 1, 2, 3, 6 ]
// console.log(p)[ 1, 2, 3, 8 ]


// spread operator and string
const q = ['a', ...'bc', 'd']
console.log(q) // ['a','b', 'c', 'd']


