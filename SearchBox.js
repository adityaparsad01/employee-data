import React,{Component} from 'react'


function SearchBox(props){
  return(
    <div>
    <input class="form-control mb-2" type="search" placeholder="Search" onChange={props.handleInput}/>
    </div>
  )
}

export default SearchBox;