import { useState, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
const mockData = [
    {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: true,
        content: '빨래 하기',
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: '노래 연습하기',
        date: new Date().getTime(),
    },
];
function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onUpdate = (targetId) => {
        setTodos(todos.map((aTodo) => (aTodo.id === targetId ? { ...aTodo, isDone: !aTodo.isDone } : { ...aTodo })));
    };

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };
        setTodos([newTodo, ...todos]);
    };

    const onDelete = (targetId) => {
        setTodos(todos.filter((aTodo) => aTodo.id !== targetId));
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
