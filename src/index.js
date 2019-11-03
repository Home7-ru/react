const user ='bob';
const num=17;
//было
const txt='hello'+user+'you have'+num+'letters';

//стало
const tst2=`heloo ${user} you ${num} letters`;

// можно выводить и значения с функциями

const tst3=`now is ${Date.now()}`;

console.log(tst3);

const html=
    '<ul>'+
    '<li>Item One</li>'+
    '<li>Item Two</li>'+
    '</ul>';
const items=['tea','coffee'];
const tamplateHtml=`'<ul>
    <li>${items[0]}</li>
    <li>Item Two</li>
    </ul>`;
console.log(tamplateHtml);