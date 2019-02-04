import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import TodosList from './TodosList'
import TODOS from './db'

const Scroller = ({ children, className }) => (
	<div className={'Scroller ' + className}>
		{children}
	</div>
)

const App = () => {
	const [todos, setTodos] = useState(TODOS)

	const handleFormSubmit = title => {
		setTodos([ { id: todos.length + 1, title }, ...todos ])
	}

	const handleArchiveClick = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const handleToggleDone = id => {
		setTodos(todos.map(todo => {
			if (todo.id !== id) return todo
			else return ({ ...todo, done: !todo.done })
		}))
	}

	return (
		<div className="Todo-App">
			<Form onSubmit={handleFormSubmit} />
			<Scroller className="TodosList-Scroller">
				<TodosList
					todos={todos}
					onArchiveClick={handleArchiveClick}
					onDoneClick={handleToggleDone}
				/>
			</Scroller>
		</div>
	);
}

export default App;