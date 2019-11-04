import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
//так как это jsx то мы передаем объект
    const divStyle={
      'text-align':'center'
    }
// внутри jsx можно писать так
    return (

         <div style={divStyle}>
            <h1 style={{color:'blue','font-size': '20px'}}>Hello world!</h1>
         </div>



    );

  }
}

export default App;
