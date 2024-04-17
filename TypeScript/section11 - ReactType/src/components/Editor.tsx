import { useState } from 'react';
import { useTodoDispatch } from '../hooks/useTodoDispatch';

export default function Editor() {
    const dispatch = useTodoDispatch();
    const [text, setText] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        dispatch?.onClickAdd(text);
        setText('');
    };

    return (
        <div className='p-2 m-3 flex'>
            <input
                className=' p-1 border-2 flex-grow m-2 border-indigo-300 rounded'
                value={text}
                onChange={onChangeInput}
            />
            <button className='bg-indigo-300 w-14 m-2 text-white rounded hover:bg-indigo-500 ' onClick={onClickButton}>
                추가
            </button>
        </div>
    );
}
