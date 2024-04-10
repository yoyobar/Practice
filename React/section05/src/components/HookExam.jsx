import { useState } from 'react';
import useInput from '../Hooks/useInput';

//hook 팁
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출가능
//2. 조건부로 호출될 수 없음
//3. 커스텀훅을 제작할 수 있음

const HookExam = () => {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    );
};

export default HookExam;
