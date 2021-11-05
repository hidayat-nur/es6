function valReturn(name = 'hidayat', address = 'kebumen', ...args) {
  return `${name} - ${address} - ${typeof args}`
}

// console.log(valReturn()) //hidayat - kebumen - 
// console.log(valReturn(address = 'gombong')) // gombong - kebumen -
// console.log(valReturn('isna')) // isna - kebumen -
// console.log(valReturn('isna', 'england')) // isna - england -
// console.log(valReturn('sarah', 'texas', 'america', 'rusia')) //america rusia will to be array in parameters args ['america','rusia']


// function example(a, ...args, b) { //will error // rest parameters must in the end parameters
// }

// console.log(example())

function example2(...args) { //no error because only one parameter
  return 6
}

// console.log(example2())

function add(...args) {
  return args.reduce((prev, curr) => {
    return prev + curr
  })
}

// console.log(add(2,2,3)) //7
console.log(add(10,10,50)) //70
