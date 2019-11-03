//Ключевые слова let и const вместо var
//let и const видны только в облости кода где они обьявлены
//в отличии от var
//пример let обьевляет переменную внутри снаружи не видна
if(true){
    let a=1;
}

let name ='joe';
name ='bob';
const names=['peter','bob'];
names.push('jen')