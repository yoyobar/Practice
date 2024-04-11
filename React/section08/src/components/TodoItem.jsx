import { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({ content, date, isDone, id, onUpdate, onDelete }) {
    const checkChange = () => {
        onUpdate(id);
    };
    const deleteChange = () => {
        onDelete(id);
    };

    return (
        <div className='TodoItem'>
            <input onChange={checkChange} checked={isDone} type='checkbox' />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={deleteChange}>삭제</button>
        </div>
    );
}
