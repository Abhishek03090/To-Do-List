import React from 'react'

export const TodoItem = (props) => {
  //console.log(todo.todo[0].id,"hello")
  return (
    <div>
       {/* <p>{props.todo.id}</p> */}
      <h4>{props.todo.job}</h4>
      <p>{props.todo.description}</p>
      <button className="btn btn-sm" style={{background:"#ff7200"}} onClick={()=>{props.onDelete(props.todo)}}>Finish</button>
    </div>
  )
}
