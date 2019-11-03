/**
 * Created by SadAdmin on 12.01.2019.
 */
//rest parametr

function max(...numbers) {
    console.log(numbers);
}
max(1,5,6);

//вернет  массив
//   [ 1 ][2][3]
//  можно и с несколькими переменными
function max(a,b,...numbers) {
    console.log(numbers);
}
// так нельзя первым рест параметр идти не может
function max(...numbers,a,b,) {
    console.log(numbers);
}