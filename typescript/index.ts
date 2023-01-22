// let myChannel = 'Zolk'
// let is1K = true

// is1K += myChannel

// console.log(is1K)

let myChannel: string | boolean = 'Zolk'
let is1K: boolean = true

myChannel += ' has 1k subs'

console.log(is1K)

const num: number = 10
const regex: RegExp = /eeeeee/
const array1: string[] = myChannel.split('')
const array2: number[] = [1, 2, 3]
// Generics
const array3: Array<number> = [4, 5, 6]
const array4: Array<number | string> = [7, 8, 9, 'a']


const object: {
    name: string
    role: string
    isAdmin: boolean
    age: number
} = {
    name: 'Gabriel',
    role: 'developer',
    isAdmin: true,
    age: 22,
}

interface ExemploProps {
    name: string
    role: string
    isAdmin?: boolean
    age: number
}

const object2: ExemploProps = {
    name: 'Gabriel',
    role: 'developer',
    
    age: 22,
}

function example({ name, role, isAdmin, age }: ExemploProps) {}

const ids: Record<number, string> = {
    [10]: 'a',
    [20]: 'b',
}

ids[30] = 'c'

if (ids[30] === 'asc'){

}

let forEach = [10, 12, 14].forEach((v: number) => v + 10)

let map = [10, 12, 14].map((v) => `${v + 1}`)