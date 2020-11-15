//ARRAY AND STRING
// (SPLIT & JOIN tidak merubah)

// CONVERT STRING TO ARRAY
//konversi dari string menjadi sebuah array
let str = 'Hello'
console.log(str)
str.split("") // split string to an array by an "" empty string
console.log(str.split("")) // [ 'H', 'e', 'l', 'l', 'o' ]

let kenalan = 'Hello, nama saya jane' 
console.log(kenalan.split(" ")) // berdsrkan spasi [ 'Hello,', 'nama', 'saya', 'jane' ]
//saya maju pecah string berdasarkan apa, bisa EMPTY STRING atau SPASI
console.log(kenalan.split("")) //
/* [
  'H', 'e', 'l', 'l', 'o',
  ',', ' ', 'n', 'a', 'm',
  'a', ' ', 's', 'a', 'y',
  'a', ' ', 'j', 'a', 'n',
  'e'
] */
console.log(kenalan) //tidak merubah si kenalan, array nya ga berubah
//berubah cuma kalo dipakein .split .join

// CONVERT FROM ARRAY TO STRING
let arr =['Hello', 'World', 'JavaScript']
console.log(arr.join('')) // HelloWorldJavaScript
console.log(arr.join(' ')) // Hello World JavaScript
console.log(arr)