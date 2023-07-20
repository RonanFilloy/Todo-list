import React, {useContext} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {TodosProvider} from './contexts/todos.context';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function TodoApp() {

    return (
        <Paper
            sx={{
                padding: '0',
                margin: '0',
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' 
                sx={{
                    height: '64px'
                }}
            >
                <Toolbar>
                    <Typography color='inherit'>
                        To do List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center'
                sx={{
                    marginTop: '1rem'
                }}
            >
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp