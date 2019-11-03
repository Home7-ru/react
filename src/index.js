const x=10;
const y=30;
//было раньше
const point1={
    x:x,
    y:y

};
//стало сейчас
const p1={x,y};
//---------------------------
//было раньше
const point={
    x:x,
    y:y,
    draw: function () {
        //
    }
};
//стало сейчас
const p={x,y, draw(){}};

//-------------------------------
const prefix='_blah_';
const data={
    [prefix+'name']:'bob',
    [prefix+'age']:23
};
//{ _blah_name: 'bob', _blah_age: 23 }

const defaults={
    host:'localhost',
    dbName: 'blog',
    user:'admin'
};
const opts={
    user:'john',
    password: 'utopia'
};
//перезапишет defaults совместив с opts
Object.assign(defaults,opts);



/*{ host: 'localhost',
  dbName: 'blog',
  user: 'john',
  password: 'utopia' }
  */
const defaults1={
    host:'localhost',
    dbName: 'blog',
    user:'admin'
};
const opts1={
    user:'john',
    password: 'utopia'
};
//так создаем обьедененый обект из двух
const res=Object.assign({},defaults,opts);

//------------------------------
const person={
    name:'Bob',
    friends:['Mark','Jacob']
};

//------Зделать копию обьекта обьект получается сылочный
const shallowCopy=Object.assign({},person);
// если в новый обьект добавть новое имя он появться и в дублированном обьекте
person.friends.push('jane');
console.log(shallowCopy);