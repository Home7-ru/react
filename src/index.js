//import React from 'react';
//необходим для трансформации jsx кода
//по типу
//const el= React.createElement('h1', null, 'Hello World');

import React from 'react';
import ReactDOM from 'react-dom';

//мы создали элемент внутри которого есть другие элементы
//таким образом мы создали дерево элементов
const el = (
    <div>
        <h1>My Todo list</h1>
        <input placeholder="search"/>
        <ul>
            <li> Первая строка</li>
            <li> Вторая строка</li>
        </ul>
    </div>
)




ReactDOM.render(el, document.getElementById('root'));