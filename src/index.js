const defaults={
    host:'localhost',
    dbName: 'blog',
    user:'admin'
};
const opts={
    user:'john',
    password: 'utopia'
};
//так создаем обьедененый обект из двух
const res=Object.assign({},defaults,opts);

const res1={...defaults,...opts};
//
const port=8080;

const res2={
    ...defaults,
    ...port,
    port,
    connect(){

    }
};
console.log(res1);