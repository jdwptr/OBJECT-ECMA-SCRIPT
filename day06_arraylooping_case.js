// CASE 1:
// tolong balik atau reverse()

let str = 'javascript' // result = tpircsavaj

// CONVERT FROM STRING TO ARRAY
let strArr = str.split('')
console.log(strArr)
strArr.reverse()
console.log(strArr)

//CONVERT KE STERING LG
console.log(strArr.join(''))

//SHORTCUT => CHAINING METHOD
console.log(str.split('').reverse().join(''))

// CASE 2
// filter bilangan genap di array berikut ini
let angkaRandom = [1, 12, 3, 4, 1, 5, 7, 9, 10, 11, 13, 5, 47]

// PAKAI for loop
let angkaGenap = []
for (let i = 0; i < angkaRandom.length; i++) {
    if (angkaRandom[i] % 2 === 0) {
        angkaGenap.push(angkaRandom[i])
    }
}
console.log(angkaGenap)

//SHORTCUT : .filter()
let angkaGenapHasilFilter = angkaRandom.filter(item => item % 2 === 0)
console.log(angkaGenapHasilFilter) 