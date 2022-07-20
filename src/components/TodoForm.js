import {useState} from 'react';

export default function TodoForm(props) {
    const [taskName, setTaskName] = useState('');

    function handleChange(e) {
        setTaskName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (taskName === '') {
            return;
        }

        props.addTask(taskName);
        setTaskName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input">What tasks to do today?</label>
            </h2>
            <input 
                type="text" 
                className="todo-input ui focus input"
                id="new-todo-input"
                name="text"
                value={taskName}
                autoComplete="off"
                onChange={handleChange} />
            <button type="submit" className="btn-add ui primary button">Add</button>
        </form>
    );
}