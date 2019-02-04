import React from 'react';
import Todo from './Todo'

const EmptyMessage = () => <div className="Todo-Title">No Todos</div>

const TodosList = ({ todos, onArchiveClick, onDoneClick }) => {
    const isListEmpty = todos.length === 0
    return (
        <div className="TodosList">
            {
                isListEmpty ?
                <EmptyMessage />
                :
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onArchiveClick={onArchiveClick}
                        onDoneClick={onDoneClick}
                    />
                ))
            }
        </div>        
    );
}

export default TodosList;