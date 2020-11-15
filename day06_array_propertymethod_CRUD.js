//ARRAY [...] : REFERENCE DATA TYPE
//ARRAY [...] : menyimpan koleksi data, menyimpan data lebih dari satu dalam satu tempat
//ARRAY [...] : bisa menampung segala jenis data, termasuk ARRAY itu sendiri
//(array kyk satu lantai apart, 1 lantai ada kamar2 apart, dalam 1 kamar ada kamar - kamar lagi)
//(aray bisa nyimpen data sndr : dlm kamar ada kulkas dll)

// ARRAY CRUD OPERATION
// OPERASI YG BERHUB. DENGAN :

// CREATE ARRAY :
let arr = [] // 1. Literal = membuat array kosong (apart 1 lantai kosong)
let arr2 = new Array(5) // array kosoong, dengan 5 element (apart 1 lantai, 5 kamar)
let arr3 = new Array() // array kosong tidak ada isinya
/*console.log(arr)
console.log(arr2)
console.log(arr3)*/

// READ DATA IN ARRAY : Akses data didlm array
// menggunakan INDEX nya => index dimulai dari 0
let users = ['elsa', 'olaf', 'anna'] //dipisah sama koma, koma kyk sekat kamar
/*console.log(users[0])
console.log(users[1])
console.log(users[2])*/

// ADD / INSERT DATA TO ARRAY : MENAMBAHKAN DATA KE DLM ARRAY
// .push()      => termasuk METHOD -> menambahkan data ke dlm array, ditaruh di paling akhir
// .unshift()   => menambahkan item kedlm array, ditaruh di paling awal

users.push('alee') //ditaruh di paling akhir
//console.log(users)
users.push('kevin')
//console.log(users)

users.unshift('doni') // data baru ditaruh di awal
//console.log(users)

//KALAU DATA MAU DITAMBAH DI TENGAH TENGAH ??
//array dipecah stlh data index ke berapa yg mau ditambah, terus ditambah terus dijoin

// EDIT / UPDATE / DATA/ELEMENT DI DALAM ARRAY
users[5] = 'aldo'
//console.log(users) // kevin jadi aldo
users[0] = 'chelsea'
//console.log(users) //doni jd chelsea

// DELETE DATA ITEM ELEMENT DLM ARRAY : ADA 2 cara
// 1. METHOD => splice(), .shift() , .pop() 
// 2. key delete => delete array []

// DELETE PAKE METHOD :
users.pop() // MENGHAPUS ELEMENT PALING TERAKHIR
//console.log(users)

users.shift() //MENGHAPUS ELEMENT PALING PERTAMA
//console.log(users)

// .splice() => merubah data dlm array, dgn cara menghapus, menambah
//(nge remove, nge add, nge replace element)
let month = ['jan','feb','mar','apr','may','june']
/*console.log(month)
console.log(month.splice(3)) // menghasilkan ['apr', 'may', 'june' ]
//=> method ini menghasilkan array hasil .splice()
console.log(month) // jadi munculnya [ 'jan' 'feb' 'mar' ] aja
let hasil = month.splice(0)
console.log(hasil)
// unutk nyimpan hasil yg di .splice() */

//.splice(i) = sy mau mengambil, memotong elemet dr array, mulai dr index ke i samapi akhir

// .splice(i, 0, new-value) => insert new element di index ke i
month.splice(1, 0, 'oct') // memasukkan data 'oct' ke index 1, feb kegeser ke index 3
month.splice(3, 0, 'aug') // [ 'jan', 'oct', 'feb', 'aug', 'mar' ]
// memasukkan data 'aug' ke index ke 3, maret kegeser ke index 4
//console.log(month)

//.splice(i, j, new-value) => 
// sy ingin mereplace elemen di index ke i
// dgn value = new-value , dengan total j element 
month.splice(3, 1, 'dec')
//console.log(month) // jadi [ 'jan', 'oct', 'feb', 'dec', 'mar' ]
//month.splice(1, 2, 'jul')
//console.log(month) //[ 'jan', 'jul', 'dec', 'mar' ] jd kyk gitu krn cuma masukin 'jul' harusnya 2
// jd si 'feb' udah diapus
month.splice(1, 2, 'jul', 'aug') // [ 'jan', 'jul', 'aug', 'dec', 'mar' ]
//console.log(month)

// REMOVE MULTIPLE ITEM INSIDE ARRAY
// DELETE LEBIH DARI SATU ITEM / ELEMEN
// ['jan',jul','aug','dec','mar']
// months.splice(1 ,2)  // .splice(i, j) saya ingin meremove dari index ke i sampe ke j
// console.log(month) 

// DELETE WITH KEY DELETE
let hobi = ['singing','dancing','coding','running']
//console.log(hobi)
// mau delete yg coding => 
delete hobi[2] // menghapus value dari item array dengan index ke 2 
//(4 kamar, kamar index2 dikosongin)
//element masih ada tapi kosong
//console.log(hobi) // [ 'singing', 'dancing', <1 empty item>, 'running' ]

//beda nya dengan delete
hobi.splice(1,1) //sy menghapus item dari index ke 1, sebanyak 1 element
//console.log(hobi) // [ 'singing', <1 empty item>, 'running' ]

// PROPERTY OF ARRAY =>(METHOD=>FUNGSIONALNYA) (PROPERTI=>FISIKNYA)
// .length => untuk menghitung item yg ada di dlm array (hit. panjang array)
//console.log(hobi.length) // value nya angka, 3

//METHOD ADA BANYAK, YG PENTING
// .sort() , .reverse(), .reduce()
let numbers = [9, 7, 4, 2, 1, 0, 10, 3, 8]
numbers.sort((a, b) => a - b) //mengurutkan dr terkecil ke terbesar (ascending / asc)
//console.log(numbers)

numbers.sort((a, b) => b - a) //mengurutkan dr terbesar ke terkecil (descending/ )
//console.log(numbers)

// .reverse()
let season = ['semi' ,'panas' ,'dingin', 'gugur']
season.reverse()
//console.log(season.reverse())

//mau tau total item yug ada di numbers
//operator matematik nya bisa digonta ganti
//console.log(numbers.reduce((a,b) => a + b)) //44
//console.log(numbers.reduce((a,b) => a - b)) // -24

//console.log(season.reduce((a ,b) => a + b)) // string nya nyambung semua = semipanasdingingugur
//console.log(season.reduce((a ,b) => a - b)) // NaN karena string cuma bisa ditambah

//SHORTCUT => CHAINING METHOD
//console.log(str.split('').reverse().join(''))