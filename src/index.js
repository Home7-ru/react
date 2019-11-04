// объеденит два массива

let a = ['a','b','c'];
let b = ['a1','b1','c1'];

let s =[...a, ...b];

console.log(s);

// так можно передать массив в функцию
function add(x, y ,z){
    console.log(x+y+z);
}

let numbers =[1,2,3];

add(...numbers);