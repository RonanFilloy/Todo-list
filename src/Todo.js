import React, {useContext, memo} from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggle'
import { DispatchContext } from './contexts/todos.context';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

function Todo(props) {
    const [editing, toggleEditing] = useToggle();
    const dispatch = useContext(DispatchContext)
    
    const deleteTodo = () => {
        dispatch({type: 'REMOVE', id: props.id});
    }
    
    const toggleCheckbox = () => {
        dispatch({type: 'TOGGLE', id: props.id});
    }

    return (

        <ListItem>
            {editing ? 
                <EditTodoForm 
                    id={props.id}
                    value={props.task}
                    toggleEditing={toggleEditing}
                /> : 
                <>
                    <Checkbox checked={props.completed} onClick={toggleCheckbox}/>
                    <ListItemText
                        sx={{
                            textDecoration: props.completed ? 'line-through' : 'none',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {props.task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='edit' onClick={toggleEditing}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label='delete' onClick={deleteTodo}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default memo(Todo)