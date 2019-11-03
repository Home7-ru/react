/**
 * Created by SadAdmin on 12.01.2019.
 */
//диструктуризация

const person ={
    firstName: 'Peter',
    lastName: 'Smith',
    age: 27
};

const{firstName,lastName}= person;

console.log(firstName,lastName);

const person1 ={
    name:{
        first: 'Peter',
        last: 'Smith'
    },
    age: 27
};
const{name:{first,last}}= person1;
console.log(first,last);