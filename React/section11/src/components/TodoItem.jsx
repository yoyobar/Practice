import { memo } from 'react';
import './TodoItem.css';
import { useContext } from 'react';
import { TodoDispatchContext } from '../App';

function TodoItem({ content, date, isDone, id }) {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

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

//props가 바뀌었을때만 리렌더링
//콜백함수로 customize, 이전값과 이후값의 비교
//T -> 리렌더링 F-> 리렌더링X
//고차 컴포넌트 (HOC), props값을 기준으로 개선
//memo, 얕은비교 ===, useCallback, 깊은비교

//최적화를 언제 할지
//** 기능구현이 완료 된 후 최적화

//최적화를 어떤것을 할지
//** 최적화가 필요해보이는 연산, 함수, 컴포넌트

export default memo(TodoItem);
