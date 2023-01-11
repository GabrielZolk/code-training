//MODO 1

const number = [ 4, 6, 8, 12, 43, 23 ]

function isEven(num) {
    if(num % 2 == 0) {
        return true
    } else {
        false
    }
}

const newValues = number.filter(isEven)

console.log(newValues)

//MODO 2

const number2 = [ 4, 6, 8, 12, 43, 23 ]

const newValues2 = number.filter((num) => num % 2 == 0 ? true : false)

console.log(newValues2)

//MODO 3

const number3 = [ 4, 6, 8, 12, 43, 23 ]

const newValues3 = number.filter((num) => num % 2 == 0)

console.log(newValues2)

// ---------

const Zolkistão = [
    { name: 'Carlinhos da Massa', age: 25, title: 'JR', test: 35 },
    { name: 'Joãozinho do Pastel', age: 32, title: 'PL', test: 56 },
    { name: 'Harry Potter', age: 80, title: 'SR', test: 90 },
    { name: 'Vitinho o Pequeno', age: 50, title: 'JR', test: 55 },
    { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
    { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]


const titlePL = Zolkistão.filter((person) => (person.title === 'PL'))

console.log(titlePL)

const age = Zolkistão.filter((person) => person.age >= 30)

console.log(age)

const ageAndJr = Zolkistão.filter((person) => person.age >= 30 && person.title === 'JR')

console.log(ageAndJr)

const ageFilterMapSome = Zolkistão.filter((person) => person.age >= 30).map((item) => item.name).some((name) => name === 'Harry Potter')

console.log(ageFilterMapSome)