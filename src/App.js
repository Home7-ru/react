import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

// все элемнеты должны быть обернуты в корневой div


      <div>
         <div className="App">
            <h1>Hello world!</h1>
         </div>
            <p>kkkkjj</p>
      </div>
//так работать не будет
//<p>kkkkjj</p>

    );

  }
}

export default App;
