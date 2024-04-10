import { useState } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
function App() {
    const [count, setCount] = useState(0);

    const onClickButton = (value) => {
        if (isNaN(value)) {
            setCount(0);
        } else {
            setCount(count + value);
        }
    };

    //state Lifting
    return (
        <div className='App'>
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller func={onClickButton} />
            </section>
        </div>
    );
}

export default App;
