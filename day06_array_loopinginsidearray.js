// NOTE
//LOOPING INSIDE ARRAY
let users = ['alee','olaf','inosuke','megumin','kazuma']
// CASE : TAMPILKAN SEMUA NAMA DI ARRAY USER
console.log(users[0])
console.log(users[1])
console.log(users[2])
// TAPI AKLO DATA NYA BANYAK KAN GA EFEKTIF PAKE CONSOLE.LOG
// PAKAI LOOPING UNTUK BERULANG ULANG

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

// CASE : tolong tampilkan nulai ganjil di array number
let numbers = [0, 9, 1, 3, 5, 2, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i])
    }
}

//CASE : ambil nilai yg tipe data string dr array berikut
let arr2 = ['hello', 1, true, ['hay'], 'world', 'react-js', 9, 11]
 for (let i = 0; i < arr2.length; i++) {
     if (typeof arr2[i] == 'string') {
         console.log(arr2[i])
     }
 }

//console.log(typeof []) // makanya hay ga dimunculin krn array itu objectm jd yg kebaca yg diluar

// LOOP USING SPECIAL METHOD
// .map() , .filter() , .forEach()

// .forEach()
let arr3 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
}

//.forEach()   => untuk looping setiap item di dalam array (array nya ga diubah)
//.forEach()  => tdk menghasilkan aray baru

arr3.forEach (item => console.log(item))
let modArr1 = arr3.forEach (item => console.log(item))
console.log(modArr1)

//.map()    => looping setiap item dalam array
//          => yg tujuannya untuk memodifikasi item didlm array
//.map()    => tdk merubah array original tapi 
//          => menghasilkan array baru hasil modifikasi .map()
//          => dengan panjang yg sama
//.map()    => setiap siswa di kelas dikasih kartu nama satu satu, each have one

let modArr2 = arr3.map(item => item * 2)
console.log(modArr2) // [ 2, 4, 6, 8, 10 ] = array baru
console.log(arr3) // [ 1, 2, 3, 4, 5 ] = array lama tetep ada

// .filter()    => sama dgn .map()
//              => tetapi dia akan menghslkan array baru 
//              => dgn panjang yg tdk harus sama dengan array original
//              => panjang array baru bisa lebih pendek dr original
// .filter()    => tidak merubah array originalnya
// .filter()    => untuk memfilter atau menyaring item yg ada di dlm array
// .filter()    => hasil nya ga sama (filter untuk menyaring)

let arrStr = arr2.filter(item => typeof item == 'string')
console.log(arrStr) // [ 'hello', 'world', 'react-js' ]
console.log(arr2)
