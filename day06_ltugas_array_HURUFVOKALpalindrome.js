/*- input str = 'hello dunia'
output nya = huruf vokal 'aeiou'*/

let str = 'hello dunia'

//STRING TO ARRAY
let kataArr = str.split('')
console.log(kataArr)

let vokal = []

for (let i = 0; i < kataArr.length; i++) {
    if (kataArr[i] == 'a'|| kataArr[i] == 'i' || kataArr[i] == 'u'||kataArr[i] == 'e'|| kataArr[i] == 'o' ) {
        vokal.push(kataArr[i])
    }
}
console.log(vokal)

//- input st = 'javascript'
//output nya = dihitung huruf vokalnya ada brp dr string tsb



//string to array
let str1 = 'javascript'
let strArr = str1.split('')
console.log(strArr)

let vokal1 = []
let vokal1_count = 0

for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == 'a' ||strArr[i] == 'e' ||strArr[i] == 'i'||strArr[i] == 'o'||strArr[i] == 'u' ) {
        vokal1.push(strArr[i])
        vokal1_count++
    }
}
console.log(vokal1_count)


//- input str = 'purwadhika'
//output nya = string, tapi diurutkan => aadhikpruw (berdsrkan a - z)

let pwdk = 'purwadhika'
let pwdkArr = pwdk.split('')
pwdkArr.sort()
console.log(pwdkArr)
console.log(pwdkArr.join())

//- check palindrome
//- input nya string outputnya boolean true or false
// 'wow' <=> wow
// 'katak' <=> katak
// 'takut' !<=> bukan palindrome

//gunakan for loop, while loop, do while 

//PALINDROME :

