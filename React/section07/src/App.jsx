import { useState, useEffect, useRef } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import './App.css';
function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const isMount = useRef(false);

    //use Effect
    //life cycle
    //마운트 -> 업데이트 -> 언마운트
    //의존성 배열 (deps)
    //useState내에 선언하여도, 비동기로 동작하므로 뒤늦게 되어 값이 늦게나옴

    //1. 마운트 : 탄생 (빈 배열)
    useEffect(() => {
        console.log('mount');
    }, []);

    //2. 업데이트 : 변화, 리렌더링 (매개변수 X)
    //만약 첫 업데이트를 무시하고 싶다면, useRef를 하나 선언하여 활용
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log('update');
    });

    //3. 언마운트 : 죽음
    useEffect(() => {});

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
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    value={input}
                ></input>
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller func={onClickButton} />
            </section>
        </div>
    );
}

export default App;
