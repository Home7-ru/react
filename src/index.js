/**
 * Created by SadAdmin on 12.01.2019.
 */
//Spred operator для иасссивов
const arr=[1,2,3];
const arr2=[8,9,10];
const res= Math.max.apply(Math,arr);


const res1= Math.max(...arr);


const res2= Math.max(...arr,...arr2);
console.log(res1);
//так можно скопировать массив
const shaloowCopy=[...arr, ...arr2];
console.log(shaloowCopy);