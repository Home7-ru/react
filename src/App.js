import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    // конструктор вызывается первым и он относится к возможностям js
    //но не к api reacta и не является жизненым циклом react
    constructor(props){

        console.log("constructor");
        super(props)
        this.state={
            cars: [
                { name:'Ford', year: 2018},
                { name:'Audi', year: 2016},
                { name:'Mazda', year: 2010}
            ],
            pageTitle: 'React components',
            showCars: false
        }
    }


    toggleCarsHandler = () => {


    this.setState({
        showCars:!this.state.showCars
    })
  }

    onChangeName(name, index){

      const car = this.state.cars[index]
      car.name = name
//клонируем масив
//старый метод

          //const cars = this.state.cars.concat()
        const cars = [...this.state.cars]
        cars[index]=car
        this.setState({
            cars:cars
        })
    }


    deleteHandler(index){
      const cars =this.state.cars.concat()
        //производим удаление одного элемента
      cars.splice(index,1)
      this.setState({cars})
    }
//срабатывает тогда когда происходит инициализация компонента
    componentWillMount() {
        console.log('App componentWillMount')
    }
//срабатывает тогда когда уже готов некоторый html
    componentDidMount() {
        console.log('App componentDidMount')
    }




// index берется из метода map
  render() {
      console.log('render')
    const divStyle={
      textAlign:'center'
    }

    let cars= null
      if(this.state.showCars){
          cars = this.state.cars.map((car, index)=> {
              return (
                  <Car
                      key={index}
                      name={car.name}
                      year={car.year}
                      onDelete={this.deleteHandler.bind(this, index)}
                      onChangeName={event => this.onChangeName(event.target.value,index)}
                  />
              )
          })
      }
    return (

         <div style={divStyle}>
            {/*<h1>{this.state.pageTitle}</h1>*/}
             <h1>{this.props.title}</h1>

           <button onClick={this.toggleCarsHandler}>toggle cars</button>

             <div style={{
                 width: 400,
                 margin: 'aito',
                 paddingTop: '20px'
             }}>

             { cars }

         </div>

         </div>


    );

  }
}

export default App;
