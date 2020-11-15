// ~MULTI DIMENTIONAL ARRAY~ => ARRAY 2D
// array inside an array
let multiArray = [
    ['Js','Py','Java'],
    ['React','Vue','Angular'],
    ['react-Native', 'Flutter','Ionic']
]
// panjang nya 3 , setiap item nya array

//GET DATANYA :
console.log(multiArray[0]) //['Js','Py','Java']
console.log(multiArray[0][2]) // dr multiarr itemnya array, trs diambil index ke 2 => Java
console.log(multiArray[2][1]) // Flutter

let multiArray2 = ['Purwadhika', 0, true, ['Hello','World', [false, 1]],'Javascript']
//mau ambil string world
console.log(multiArray2[3][1]) // World
console.log(multiArray2[3][2][1]) // 1

