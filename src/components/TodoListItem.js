import {useState} from 'react';
import { ListItem, ListItemText, ListItemButton, IconButton  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';

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
        <div className="edit-item-view">
            <TextField
                id="edit-item"
                onChange={handleNewTaskNameEdit}
                label={props.task.taskName}
                variant="outlined"
                size="small"
                        sx={{
                            width: "60%",
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
            <IconButton  onClick={() => setIsEditItem(false)} sx={{ color: "white" }} >
                <CancelIcon  />
            </IconButton >
            <IconButton  onClick={handleNewTaskNameSubmit} sx={{ color: "white" }} >
                <CheckIcon />
            </IconButton >
        </div>
    );

    const viewTodoItemTemplate = (
        <ListItemButton>
            <ListItemText primary={props.task.taskName} sx={{paddingLeft: "100px"}} />
            <IconButton  onClick={() => setIsEditItem(true)} sx={{ color: "white" }} >
                <EditIcon />
            </IconButton >
            <IconButton  onClick={() => props.deleteTask(props.task.id)} sx={{ color: "white" }} >
                <DeleteIcon />
            </IconButton >
        </ListItemButton>
    );
    
    return (
        <ListItem disablePadding>
            {isEditItem ? editTodoItemTemplate : viewTodoItemTemplate}
        </ListItem>
    );
}