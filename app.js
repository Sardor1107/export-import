//N1 sonning toq yoki murakkabligini topadigan funksiya;
export function func(a) {
    let result = 0
    for(let i = 1; i <= a; i++) {
        if(a % i == 0) {
            result += 1
        }
       
    }
    if(result == 2) {
        console.log("toq son");
    }
    else{
        console.log("murakkab son");
    }
}


// //N2 sonli massivni manfiy elementlarni musbat elementlarni aylantiruvchi dastur
// function musbat(){
//     let a = [-1, 4, 12, -78, 64, -4, 21, 36]
//     let arr = []
//     for(let i of a) {
//         if(i < 0) {
//            let musbatlovchi = i*(-1)
//             arr.push(musbatlovchi)
//         }
//         else {
//             arr.push(i)
//         }
//     }
//     return arr;
// }
// let d = musbat()
// console.log(d);
// export {musbat}


// //N3 satrni teskari o'qilishini chiqaradigan dastur;
// export function str() {
//     let a = "Sardor"
//     let b = a.split("").reverse().join("")
//     console.log(b);
// }


// //N4 sonlarning o'rta arifmetigini topadigan funksiya dasturini tuzing;
// export function urta(a) {
//     let result = 0;
//     for(let i of a) {
//         result += i;
//     }
//     let b = result/a.length
//     console.log(b);
// }


// // N5 sonli massivning har bir elementini k ga oshirishidan hosil bulgan yangi massivni qaytaruvchi funksiya tuzing;
// export function oshirish (arr, k) {
//     for(let i of arr) {
//         i += k;
//         console.log(i);
//     }
// }


// //N6 Satrning oldi orqasidan boshqa bir satr qushib qaytaruvchi funksiya dasturi;
// export function str(str1, str2) {
//     let a = str1.split("")
//     a.unshift(str2);
//     a.push(str2);
//     console.log(a.join(""));
// }




