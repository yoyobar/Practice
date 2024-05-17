import { useState } from 'react';
import Todo from './Todo';
import History from './History';

function App() {
    const [modal, setModal] = useState(false);

    const clickHandler = () => {
        setModal(!modal);
    };

    return (
        <>
            <Todo />
            <button onClick={clickHandler} className='bg-green-500 hover:bg-green-600 mt-2 p-2 w-full rounded-md text-white'>
                기록
            </button>

            {modal ? <History clickHandler={clickHandler} /> : null}
        </>
    );
}

export default App;
