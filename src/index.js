let bro = ['a','b','c','d'];

// выведет 0 1 2 3 тоесть просто переберет количества массива
for(let per in bro){
    console.log(per);
}
//переберет весь массив
for(let index in bro){
    console.log(bro[index]);
}

//переберет весь массив записывая в index1 все переменные
for(let index1 of bro){
    console.log(index1);
}


