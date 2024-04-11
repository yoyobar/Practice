import { useState, useRef, useReducer, useEffect } from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
        case 'DELETE':
            return state.filter((item) => item.id !== action.targetId);
        case 'RELOAD':
            return [action.data];
        default:
            return state;
    }
}
function App() {
    const [todos, dispatch] = useReducer(reducer, [
        {
            id: new Date().getTime(),
            isDone: false,
            content: '예시',
            date: new Date().getTime(),
        },
    ]);

    const onCreate = (content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: new Date().getTime(),
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    };
    const onUpdate = (targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId: targetId,
        });
    };
    const onDelete = (targetId) => {
        dispatch({
            type: 'DELETE',
            targetId: targetId,
        });
    };

    return (
        <div className='App'>
            <Header />
            <Editor onCreate={onCreate} />
            <List onDelete={onDelete} onUpdate={onUpdate} todos={todos} />
        </div>
    );
}

export default App;
