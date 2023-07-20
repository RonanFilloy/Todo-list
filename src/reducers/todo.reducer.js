import {v4 as uuid} from 'uuid';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, {id: uuid(),task: action.task, completed: false}]  
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id)
        case 'TOGGLE':
            return state.map(t => 
                t.id === action.id ? {...t, completed: !t.completed} : t
            )
        case 'EDIT': 
            return state.map(t =>
                t.id === action.id ? {...t, task: action.task} : t
            )
        default: 
            return state
    }
}

export default reducer