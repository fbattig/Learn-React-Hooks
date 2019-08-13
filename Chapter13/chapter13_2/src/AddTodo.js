import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'

export default inject('todoStore')(observer(function AddTodo ({ todoStore }) {
  const [ input, setInput ] = useState('')

  function handleInput (e) {
    setInput(e.target.value)
  }

  function handleAdd () {
    if (input) {
      todoStore.addTodo(input)
      setInput('')
    }
  }

  function handleKeyDown (e) {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter new task..."
        style={{ width: 350, height: 15 }}
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleInput}
      />
      <button
        style={{ float: 'right', marginTop: 2 }}
        disabled={!input}
        onClick={handleAdd}
      >
        add
      </button>
    </div>
  )
}))
