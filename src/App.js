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
    pageTitle: 'React components',
    showCars: false

  }

    toggleCarsHandler = () => {


    this.setState({
        showCars:!this.state.showCars
    })
  }

    changeTitleHandker=pageTitle =>{
      this.setState({pageTitle})
    }

  render() {

    const divStyle={
      textAlign:'center'
    }



//внутри jsx нельзя использовать различные  циклы и условия но можно использовать тернарные операции
// тоесть вот так нильзя if(this.state.showCars) а заменив на ? : все работает
    return (

         <div style={divStyle}>
            <h1>{this.state.pageTitle}</h1>


           <button onClick={this.toggleCarsHandler}>toggle cars</button>

             {   this.state.showCars ?
                 this.state.cars.map((car, index)=> {
                 return(
                 <Car
                     key={index}
                   name={car.name}
                   year={car.year}
                   onChangeTitle={()=>this.changeTitleHandker(car.name)}
                 />
                 )
               })
                 :null
             }

         </div>



    );

  }
}

export default App;
