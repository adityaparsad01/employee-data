import React,{Component} from 'react'


function Dog(props){
  return(
    <div className="mb-2"style={{width:200,border:'solid 1px'}}>
    <p>Name: {props.name}</p>
    <p>Position: <strong>{props.breed}</strong></p>
    </div>
  )
}

export default Dog;