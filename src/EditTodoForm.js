import React, {useContext} from 'react';
import useInput from './hooks/useInput';
import useToggle from './hooks/useToggle'
import { DispatchContext } from './contexts/todos.context';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function EditTodoForm(props) {

    const [value, handleValue] = useInput(props.value);
    const [open, toggleOpen] = useToggle(true);
    const dispatch = useContext(DispatchContext);

    const editTask = () => {
        dispatch({type: 'EDIT', id: props.id, task: value});
        closeDialog();
    }

    const closeDialog = () => {
        toggleOpen();
        props.toggleEditing();
    }

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogContent>
                <TextField
                    required
                    autoFocus
                    margin='dense'
                    value={value}
                    onChange={handleValue}
                    id="task"
                    label="Edit task"
                    fullWidth
                    variant='standard'
                    inputProps={{
                        maxLength: '20'
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button onClick={editTask}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditTodoForm