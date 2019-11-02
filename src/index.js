// так функция не выведет name так как this уже указывает на пространство внутри
// функции setTimeout
//есть доп материал https://learn.javascript.ru/bind
const obj ={
    name:'WFM',
    logName: function () {
        setTimeout(function() {
            console.log("name",this.name);
        },2000);
    }
}

obj.logName();

//----------------------------------------------------------------------
//в переменную self1 заносим какбы текущее пространство
//и теперь переменная name видна

const obj1 ={
    name:'WFM',

    logName: function () {
        var self1 = this;
        setTimeout(function() {
            console.log("name", self1.name);
        },2000);
    }
}


obj1.logName();

//----------------------------------------------------------------------

//обьявляя через стрелочную функцию область видимости сохраняется

const obj2 ={
    name:'WFM',
    logName: function () {

        setTimeout(()=> {
            console.log("name", this.name);
        },2000);
    }
}

obj2.logName();



//----------------------------------------------------------------------
//Самый простой вариант решения – это обернуть вызов в анонимную функцию, создав замыкание:

let user = {
    firstName: "Вася",
    sayHi() {
        console.log("name", this.firstName);
    }
};

setTimeout(function() {
    user.sayHi(); // Привет, Вася!
}, 1000);

