import {useState} from 'react';

export default function TodoListItem(props) {
    const [isEditItem, setIsEditItem] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');

    function handleNewTaskNameEdit(e) {
        setNewTaskName(e.target.value);
    }

    function handleNewTaskNameSubmit(e) {
        e.preventDefault();
        props.editTaskName(props.task.id, newTaskName);
        setIsEditItem(false);
        setNewTaskName('');
    }

    const editTodoItemTemplate = (        
        <form className="todo-item-edit" onSubmit={handleNewTaskNameSubmit}>
            <label className="todo-label" htmlFor={props.task.id}>
                New name for {props.task.taskName}
            </label>
            <input id={props.id} className="todo-text" type="text" onChange={handleNewTaskNameEdit} />
            <div className="todo-item-btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setIsEditItem(false)}>
                    Cancel
                </button>
                <button type="submit" className="btn todo-save" >
                    Save
                </button>
            </div>
        </form>
    );

    const viewTodoItemTemplate = (        
        <div className="todo-item-view">
            <div className="todo-item-check">
                <input type="checkbox" />
                <label className="todo-label">{props.task.taskName}</label>
            </div>
            <div className="todo-item-btn-group">
                <button type="button" className="todo-edit-btn btn" onClick={() => setIsEditItem(true)}>
                    Edit
                </button>
                <button type="button" className="todo-delete-btn btn" onClick={() => props.deleteTask(props.task.id)}>
                    Delete
                </button>
            </div>
        </div>
    );

    
    return (
        <li className="todo-item">
            {isEditItem ? editTodoItemTemplate : viewTodoItemTemplate}
        </li>
    );
}