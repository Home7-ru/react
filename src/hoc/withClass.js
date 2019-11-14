import React from 'react'
import Counter from "../Counter/Counter";

const withClass = (Component, className) =>{

return (props)=>{
return (
    <div className={className}>
        <Counter/>
    </div>

)
}
}

export default withClass