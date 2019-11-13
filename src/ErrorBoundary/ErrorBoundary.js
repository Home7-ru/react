import React from 'react'

// идея отлова ошибок очень простая мы оборачиваем компанент в ErrorBoundary
// после этого реализуем метод componentDidCatch
export default class ErrorBoundary extends React.Component{

    state={
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
    this.setState({hasError:true})

    }

    render(){
        if(this.state.hasError){

            return <h1 style={{color:'red'}}>Somethe went wrong</h1>
        }

        return this.props.children

    }
}