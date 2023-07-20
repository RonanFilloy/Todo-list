import React, {createContext, useReducer} from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';

const TodosContext = createContext();
const DispatchContext = createContext();

function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', [], todoReducer);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

export {TodosProvider, TodosContext, DispatchContext}

