import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

export default function List({ todos, onUpdate, onDelete }) {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search.trim() === '') {
            return todos;
        }
        return todos.filter((aTodo) => aTodo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredData();

    return (
        <div className='List'>
            <h4>Todo List 🌱</h4>
            <input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
            <div className='todo-wrapper'>
                {filteredTodos.map((aTodo) => {
                    return <TodoItem onDelete={onDelete} onUpdate={onUpdate} key={aTodo.id} {...aTodo} />;
                })}
            </div>
        </div>
    );
}
