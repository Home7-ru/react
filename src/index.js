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

const AppHeader=()=>{
    return(
        <h1>My Todo list</h1>
    );
};

const SearchPanel=()=>{
    return(
        <input placeholder="search"/>
    );
};

const el = (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>
    </div>
)




ReactDOM.render(el, document.getElementById('root'));