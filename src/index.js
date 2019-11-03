/**
 * Created by SadAdmin on 12.01.2019.
 */
//функции по новому
//Так Выглядела
function sqr(){
    return x*x;
}
//так можно записать
const sqr =(x)=> x*x;

//console.log(sq(2));
//------------------------------------------------------
const arr=['1','3','4','2'];

//так было
const res2= arr
    .map(function (el) {
        return parseInt(el);
    })
    .filter(function(num){
        return num%2;
    })
    .reduce(function (max, value) {
        return Math.max(max,value);
    },0);
//так стало
const res=arr
    .map((el)=>parseInt(el))
    .filter((num)=>num%2)
    .reduce((max,value)=>Math.max(max,value))

//console.log(res);
//console.log(res2);
//-------------------------------------------------
// данный код выдаст ошибку так как  this вызывается внутри функции
/*
const greeter ={
    greet: function(name){
        console.log('hello',name);
    },
    greetAll: function(names) {
        names.forEach(function (name) {
            this.greet(name);
        });
    }
    };
greeter.greetAll(['bob','mark','pate']);
    */

const greeter ={
    greet: function(name){
        console.log('hello',name);
    },
    greetAll: function(names) {
        names.forEach((name)=>{
            this.greet(name);
        });
    }
};
greeter.greetAll(['bob','mark','pate']);


//--------------------------------------------------------
//в простых функциях можно назначать прототип
function Parson(){

}
parson.prototype.hi=function(){

}
// на функциях со => нельзя создать новый обьект
const Person=()=>{

};
new Parson();