import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let myStyle = {
    minHeight: '70vh'
  }

  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>To-do List</h3>
      {props.todos && props.todos.length === 0 ? "You have no work to do" :
        props.todos.map((toDo) => {
          return (
            <>
              <TodoItem todo={toDo} onDelete={props.onDelete} /><hr />
            </>
          )
        })
      }
    </div>
  )
}
