import React, { useState } from 'react'

export const TodoAdd = ({ handleNewTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (newTodo.trim() === '') {
      window.alert('Complete la descripcion del todo')
      return
    }
    const todo = {
      id: new Date().getTime(),
      description: newTodo, // se utiliza el valor de newTodo
      done: false
    }
    handleNewTodo(todo)
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}


