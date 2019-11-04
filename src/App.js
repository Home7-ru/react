import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      { name:'Ford', year: 2018},
      { name:'Audi', year: 2016},
      { name:'Mazda', year: 2010}
    ],
    pageTitle: 'React components'
  }

  changeTitleHandker = () => {

    const oldtTitle = this.state.pageTitle;

    const newtTitle = oldtTitle + '(changed)';

    this.setState({
      pageTitle:newtTitle
    })
  }

  render() {

    const divStyle={
      textAlign:'center'
    }

    const cars= this.state.cars;

// на сайте реакт есть описание всех событий
    return (

         <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>

           <button onClick={this.changeTitleHandker}>Change title</button>
           <Car name={cars[0].name} year={cars[0].year}/>
           <Car name={cars[1].name} year={cars[1].year}/>
           <Car name={cars[2].name} year={cars[2].year}/>
         </div>



    );

  }
}

export default App;
