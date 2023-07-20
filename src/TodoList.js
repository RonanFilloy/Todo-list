import React, {useContext} from 'react';
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function TodoList() {

    const todos = useContext(TodosContext);

    if(todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todos, i) => (
                        <React.Fragment key = {todos.id}>
                            <Todo 
                                {...todos} 
                            />
                            {i < todos.length - 1 && <Divider/>}
                        </React.Fragment>
                    ))} 
                </List>
            </Paper>
        )
    }
    return null
}

export default TodoList