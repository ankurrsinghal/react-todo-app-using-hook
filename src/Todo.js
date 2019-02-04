import React from 'react';

const classNames = (...args) => {
    return args.map(arg => {
        if (typeof arg === 'string') return arg
        else if (arg instanceof Array) return arg.join(' ')
        else if (typeof arg === 'object') {
            return Object.keys(arg).filter(key => arg[key]).join(' ')
        }
        else throw new TypeError('Invalid argument')
    }).filter(_ => !!_).join(' ')
}

const switchVal = ([trueVal, falseVal], value) => {
    return value ? trueVal : falseVal
}

const Todo = ({ todo, onArchiveClick, onDoneClick }) => {
    return (
        <div className="Todo">
            <div className={classNames('Todo-Title', { 'Todo--done': todo.done })}>
                {todo.title}
            </div>
            <div className="Todo-Actions">
                <button
                    onClick={() => onArchiveClick(todo.id)}
                    className="Todo-Action Todo-Archive">
                    Archive
                </button>
                <button
                    onClick={() => onDoneClick(todo.id)}
                    className="Todo-Action Todo-Done">
                    {switchVal(['Undone', 'Done'], todo.done)}
                </button>
            </div>
        </div>    
    );
}

export default Todo;