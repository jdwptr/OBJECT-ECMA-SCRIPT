//ARRAY [...] : REFERENCE DATA TYPE
//ARRAY [...] : menyimpan koleksi data, menyimpan data lebih dari satu dalam satu tempat

// NOTE
//CASE : Buatlah program untuk menyimpan data pelanggan
//username pelanggan
let user1 = 'adminsuper'
let user2 = 'kristof'
let user3 = 'elsa'
let user4 = 'olaf'
//kekurangan let : setiap kita mau buat data username baru
//kekurangan let : kita harus buat variabel baru & hrs inget variabelnya

//SOLUSI PAKAI ARRAY
let users = ['adminsuper','kristof','elsa','olaf']

//NOTE : DATA APA SAJA YG BISA DITAMPUNG ARRAY
//BISA MENAMPUNG DATA APAPUN, TERMASUK ARRAY ITU SENDIRI

let arr = [0, 0.0, NaN, true, 'Purwadhika', '', ['Holla']]

//CARA AKSES DALAM ARRAY / VALUE / ELEMENT / ITEM
// gunakan index atau urutan, index dimulai dari 0

console.log(users[2]) //elsa
console.log(users[0]) //adminsuper
console.log(arr[3]) //true

// MENAMBAHKAN DATA KE DALAM ARRAY (METHOD=>FUNGSIONALNYA) (PROPERTI=>FISIKNYA)

// METHOD : push ()
// push () => dipakai u/ menambahkan value ke dlm array dan diletalkan di urutan terakhir
users.push('anna')
console.log(users)
users.push(18976)
console.log(users)

// NOTE
//METHOD ADA BANYAK, YG PENTING
// .sort() , .reverse(), .reduce()
let numbers = [9, 7, 4, 2, 1, 0, 10, 3, 8]
numbers.sort((a, b) => a - b) //mengurutkan dr terkecil ke terbesar (ascending / asc)
//console.log(numbers)

numbers.sort((a, b) => b - a) //mengurutkan dr terbesar ke terkecil (descending/ )
//console.log(numbers)

// REVIEW
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

// REVIEW
// //SHORTCUT : .filter()
//let angkaGenapHasilFilter = angkaRandom.filter(item => item % 2 === 0)
//console.log(angkaGenapHasilFilter) 