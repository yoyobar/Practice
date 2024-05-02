import { useEffect, useState } from 'react';
import useTodo from './store';

const Todo = () => {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [forceRender, setForceRender] = useState(false);
    const { todo, addTodo, removeTodo, changeTodo, checkTodo } = useTodo();
    const filteredTodo = todo.filter((item) => item.description.toUpperCase().includes(input2.toUpperCase()));

    useEffect(() => {
        setForceRender(!forceRender);
    }, [todo]);

    const changeHandler = (e) => {
        e.preventDefault();

        switch (e.target.name) {
            case 'input':
                setInput(e.target.value);
                break;
            case 'input2':
                setInput2(e.target.value);
                break;
            case 'add':
                addTodo(input);
                setInput('');
                break;
            case 'delete':
                removeTodo(e.target.value);
                break;
            case 'edit':
                const data = prompt('수정하실 내용을 입력해주세요');
                if (data === null) return;
                changeTodo(e.target.value, data);
                break;
            case 'check':
                checkTodo(e.target.value);
                break;
        }
    };

    return (
        <div className='w-full h-[800px] mr-2 flex overflow-y-scroll scroll flex-col bg-slate-400 shadow-black shadow-md p-10'>
            <h1 className='text-center select-none text-2xl font-mono mb-2'>TODO LIST</h1>
            <form name='add' onSubmit={changeHandler} className='flex justify-between gap-4 ml-10 mr-10 mb-10'>
                <input className='bg-slate-50 rounded-md pl-2 pr-2 flex-grow' name='input' value={input} onChange={changeHandler}></input>
                <button className='bg-red-400 select-none hover:bg-red-500 transition rounded-md p-2 font-mono text-white' name='add'>
                    추가
                </button>
            </form>
            <div className='ml-10 mr-10 mb-10'>
                <input
                    className='bg-slate-400 outline-none  border-b-2 w-full pl-2 pr-2 p-1 flex-grow'
                    name='input2'
                    value={input2}
                    onChange={changeHandler}
                ></input>
            </div>
            {filteredTodo.map((item) => (
                <div className='w-full  bg-slate-600 rounded-md flex gap-2 p-2 mb-2 justify-center items-center' key={item.id}>
                    <input
                        checked={item.completed}
                        type='checkbox'
                        value={item.id}
                        name={'check'}
                        id={item.id}
                        onChange={changeHandler}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                        htmlFor={item.id}
                        className={
                            item.completed
                                ? 'flex-grow select-none cursor-pointer font-mono text-slate-500'
                                : 'flex-grow select-none cursor-pointer font-mono text-slate-100'
                        }
                    >
                        {item.description}
                    </label>
                    <button
                        className='font-mono text-white transition bg-indigo-400 select-none hover:bg-indigo-500 p-1 rounded-md'
                        name='edit'
                        value={item.id}
                        onClick={changeHandler}
                    >
                        수정
                    </button>
                    <button
                        className='font-mono text-white transition select-none bg-red-400 hover:bg-red-500 p-1 rounded-md'
                        name='delete'
                        value={item.id}
                        onClick={changeHandler}
                    >
                        삭제
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Todo;
