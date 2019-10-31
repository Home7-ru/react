import React from 'react';
import ReactDOM from 'react-dom';

//компанент это функция которая возвращает react элемент
const TodoList=()=>{
    return(
        <ul>
            <li> Первая строка</li>
            <li> Вторая строка</li>
        </ul>
    );
};

const el = (
    <div>
        <h1>My Todo list</h1>
        <input placeholder="search"/>
        <TodoList/>
    </div>
)




ReactDOM.render(el, document.getElementById('root'));