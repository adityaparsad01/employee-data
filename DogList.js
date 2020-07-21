import React,{Component} from 'react'
import Dog from './Dog'

function DogList(props){
  let dogs = props.filterDogs.map((dog,i)=>{
    return <Dog key={i} name={dog.name} breed={dog.breed}/>
  })
  return(
    <div>{dogs}</div>
  )
}

export default DogList