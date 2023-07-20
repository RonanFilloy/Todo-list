import React, {useContext} from 'react';
import { DispatchContext } from './contexts/todos.context';
import useInput from './hooks/useInput';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

function TodoForm() {

    const [value, handleValue, resetValue] = useInput('');
    const dispatch = useContext(DispatchContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type: 'ADD', task: value});
        resetValue();
    }

    return (

        <Paper
            sx={{
                margin: '1rem 0',
                padding: '0 1rem'
            }}
        >
            <form onSubmit={handleSubmit}>
                <TextField 
                    value={value} 
                    onChange={handleValue} 
                    margin='normal'
                    label='Add new ToDo'
                    fullWidth
                    inputProps={{
                        maxLength: '20'
                    }}
                    sx={{
                        border: 'none',
                        '& fieldset': {
                            border: 'none'
                        }
                    }}
                />
            </form>
        </Paper>
    )
}

export default TodoForm