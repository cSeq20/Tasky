import {useState} from 'react';
import { TextField, Button } from '@mui/material';

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
                <label htmlFor="outlined-basic">What tasks to do today?</label>
            </h2>
            <div className="text-button">
                <TextField 
                    id="outlined-basic"
                    label="Add a todo"
                    variant="outlined"
                    type="text" 
                    className="todo-input ui focus input"
                    name="text"
                    value={taskName}
                    autoComplete="off"
                    onChange={handleChange}
                    size="small"
                    sx={{
                        width: 300,
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderColor: "white",
                                color: "white"
                            }
                        },
                        input: {
                            color: "white",
                            fontFamily: 'Edu SA Beginner'
                        },
                        fontFamily: 'Edu SA Beginner'

                    }} />
                <Button 
                    variant="outlined"
                    type="submit"
                    className="btn-add ui primary button"
                    size="medium"
                    sx={{
                        color: "black",
                        border: "#24292E solid 0.5px"
                    }}>
                        Add
                    </Button >
            </div>            
        </form>
    );
}