const Zolkistão = [
    { name: 'Carlinhos da Massa', age: 25, title: 'JR', test: 35 },
    { name: 'Joãozinho do Pastel', age: 32, title: 'PL', test: 56 },
    { name: 'Harry Potter', age: 80, title: 'SR', test: 90 },
    { name: 'Vitinho o Pequeno', age: 50, title: 'JR', test: 55 },
    { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
    { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]


// For

let sumTest = 0

for (x = 0; x < Zolkistão.length; x++) {
    sumTest += Zolkistão[x].test
}

console.log('resultado1: ', sumTest)

// forEach

let sumTest2 = 0
Zolkistão.forEach((item) => {
    sumTest2 += item.test
})

console.log('resultado2: ', sumTest2)

// Reduce

const sumTest3 = Zolkistão.reduce((acc, item, index, array) => {
    console.log(index)
    console.log(array)
    return acc + item.test
}, 0)

console.log('resultado3: ', sumTest3)

const sumTestMap = Zolkistão.map((item) => item.test).reduce((acc, item) => {
    return acc + item
}, 0)

console.log('resultado3Map: ', sumTestMap)

const reducerDoZolkistao = Zolkistão.reduce((acc, item) => {
    const menorIdade = acc.menorIdade < item.age ? acc.menorIdade : item.age
    const maiorIdade = acc.maiorIdade > item.age ? acc.maiorIdade : item.age
    const sumTest4 = acc.sumTest4 + item.test
    return { maiorIdade, menorIdade, sumTest4 }
}, {
    menorIdade: undefined,
    maiorIdade: undefined,
    sumTest4: 0,
})

console.log('resultado4: ', reducerDoZolkistao)

const howManyTitles = Zolkistão.reduce((acc, item) => {
    if(acc[item.title] == null) {
        acc[item.title] = 1
    } else {
        acc[item.title]++
    }
    
    return acc
}, {})

console.log(howManyTitles)

const peoplePerAge = Zolkistão.reduce((acc, item) => {
    const age = item.age

    if(acc[age] == null) acc[age] = []
    acc[age].push(item.name)
        
    return acc
}, {})

console.log(peoplePerAge)