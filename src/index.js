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
    //передаем значения атрибутов
    const searchText='Type here to search';

    // название html атрибутов в jsx пишутся немного по иному чем в html например autocomplete
    // нужно писать autoComplete
    // есть два исключения в html пишем class в jsx пишем className  аналогично for и htmlFor

    return(
        <input placeholder = {searchText} autoComplete="" tabIndex=""/>
    );
};

const App=()=>{

    return(
        <div>

            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));