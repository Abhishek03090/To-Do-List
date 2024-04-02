

import React from 'react';

export const FinishedTodos = ({ finishedTodos }) => {
  return (
    <div className='container my-3'>
      <h3>Finished Tasks</h3>
      {finishedTodos.length === 0 ? "You have no finished tasks" :
        finishedTodos.map((finishedTodo) => {
          return (
            <div key={finishedTodo.id}>
              <p>Task: {finishedTodo.job}</p>
              <p>Date: {finishedTodo.description}</p>
              <hr />
            </div>
          );
        })
      }
    </div>
  );
};
