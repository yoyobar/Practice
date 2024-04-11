import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

export default function List({ todos, onUpdate, onDelete }) {
    const [search, setSearch] = useState('');

    //함수의 불필요한 호출 방지, useMemo
    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((item) => item.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);
    //의존성 배열, deps

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
            <div>
                <div>합계: {totalCount}</div>
                <div>완료: {doneCount}</div>
                <div>미완료: {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
            <div className='todo-wrapper'>
                {filteredTodos.map((aTodo) => {
                    return (
                        <TodoItem onDelete={onDelete} onUpdate={onUpdate} key={aTodo.id ? aTodo.id : 0} {...aTodo} />
                    );
                })}
            </div>
        </div>
    );
}
