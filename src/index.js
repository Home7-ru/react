import React from 'react';
import ReactDOM from 'react-dom';


const TodoList=()=>{

    const items =['Первая строка1','Вторая строка'];

    return(
        <ul>
            <li> { items[0] }</li>
            <li> { items[1] }</li>
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

const App=()=>{
    //если false то выводим если true то нет
    const isLoggedIn = false;

    const loginBox=<span>login in please</span>;
    const welcomeBox=<span>login yes</span>;

    //злоупотреблять логикой внутри jsx нужно знать меру
    //если будет более большие куски нужно вынести во вне
    return(
        <div>

            { isLoggedIn ? welcomeBox: loginBox}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));