//-------------------------------------------------
//пример объекта
//-------------------------------------------------

const createPersen =(name, surname) => {
    const fullname = name + '' + surname;
    return fullname;
}

console.log(createPersen('WFM','WFM2'));

//-------------------------------------------------
//теперь делаем так чтоб функция возвращала объект
//-------------------------------------------------

const createPersen1 =(name, surname) => {
    const fullname = name + '' + surname;
    return {
        fullname: fullname,
        name: name,
        surname: surname
    }
}

console.log(createPersen1('WFM','WFM2'));

//-------------------------------------------------
//предыдущий пример можно записать так
//-------------------------------------------------

const createPersen2 =(name, surname) => {
    const fullname = name + '' + surname;
    return { fullname, name, surname }
}

console.log(createPersen2('WFM','WFM2'));


//-------------------------------------------------
//изменяем пример добавляем функцию внутрь объекта
//-------------------------------------------------

const createPersen3 =(name, surname) => {
    const fullname = name + '' + surname;
    return {
             fullname,
             name,
             surname,
             getJob: function(){
                 return 'Front End'
             }
           };
}
const person = createPersen3('WFM','WFM2')

console.log(person.getJob());

//-------------------------------------------------
//предыдущий пример можно изменить так
//-------------------------------------------------

const createPersen4 =(name, surname) => {
    const fullname = name + '' + surname;
    return {
        fullname,
        name,
        surname,
        getJob() {
            return 'Front End'
        }
    };
}

const person1 = createPersen4('WFM','WFM2')

console.log(person1.getJob());

//-------------------------------------------------
//пример  как денамически создать свойства в объекте
//в person5 ,будет дабавлено свойства car
//-------------------------------------------------

const createPersen5 =(name, surname, fieldName) => {
    const fullname = name + '' + surname;
    const person5 = {
        fullname,
        name,
        surname,
        getJob() {
            return 'Front End';
        }
    };
    person5[fieldName] = 50;
    return person5;
};

const person5 = createPersen5('WFM','WFM5','car');

console.log(person5);

//-------------------------------------------------
//как можно это сделать с помощью ecma6 доабив еще fieldPostfix
//-------------------------------------------------

const createPersen6 =(name, surname, fieldName, fieldPostfix) => {
    const fullname = name + '' + surname;
    return {
        fullname,
        name,
        surname,
        getJob() {
            return 'Front End';
        },
        [fieldName + fieldPostfix]: 100
    };

};

const person6 = createPersen6('WFM','WFM5','car', '-name');

console.log(person6);