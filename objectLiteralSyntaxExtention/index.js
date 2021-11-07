// object property initializer shorthand
function user(name, age) {
  return {
    name,
    age
  }
}

// console.log(user('hidayat', 28)) //{ name: 'hidayat', age: 28 }

// computed property name
const name = 'hidayat'
const newUser = {
  id: 0,
  [name]: 'obama',
  ['age']: 28,
  'country': 'indonesia',
  'email address': 'dayatznur@gmail.com'
}

// console.log(name) //hidayat
// console.log(newUser.id) //0
// console.log(newUser.name) //undefined
// console.log(newUser['name']) //undefined
// console.log(newUser[name]) // obama
// console.log(newUser[age]) //error
// console.log(newUser['age']) //28
// console.log(newUser.country) //indonesia
// console.log(newUser[country]) //error
// console.log(newUser['country']) //indonesia
// console.log(newUser.emailaddress) //undefined
// console.log(newUser['email address']) //dayatznur@gmail.com


// Concise method syntax
const country = 'united stated'
const member = {
  name: 'jkt48',
  getMemberName() {
    return `${this.name} mamber is hidayat, isna, obama`
  },
  'get member age'(){
    return `${this.name} mamber is 28, 28, 40`
  },
  [country](){
    return `${this.name} mamber is from united states`
  }
}

// console.log(member.getMemberName()) //jkt48 mamber is hidayat, isna, obama
// console.log(member['get member age']()) //jkt48 mamber is 28, 28, 40
// console.log(member[country]()) //jkt48 mamber is from united states
// console.log(member['country']()) //error
// console.log(member['united stated']()) //jkt48 mamber is from united states


