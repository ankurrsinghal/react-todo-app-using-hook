import React from 'react';

const Form = ({ onSubmit }) => {

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            const value = e.target.value.trim();
            if (value) {
                onSubmit(value);
                e.target.value = '';   
            }
        }
    }

    return (
        <div className="Todo-Form">
            <input
                onKeyPress={handleKeyPress}
                placeholder="Title"
                className="Todo-Form-Input"
            />
        </div>
    );
}

export default Form;