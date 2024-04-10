import { useState, useRef } from 'react';

//1.이름
//2.생년월일
//3.국적
//4.자기소개
//useRef : 컴포넌트 내부의 변수, 값이 변경되어도 리렌더링 X
//useState : 컴포넌트 내부의 변수, 값이 변경되면 리렌더링

const Register = () => {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        bio: '',
        country: '',
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = () => {
        if (input.name === '') {
            //이름 입력 DOM요소 포커스
            return inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input ref={inputRef} name='name' value={input.name} onChange={onChange} placeholder='이름' />
            </div>
            <div>
                <input name='birth' value={input.birth} onChange={onChange} type='date' placeholder='생년월일'></input>
            </div>
            <div>
                <select name='country' value={input.country} onChange={onChange}>
                    <option value=''>국적 선택</option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='fr'>프랑스</option>
                </select>
            </div>
            <div>
                <textarea name='bio' value={input.bio} onChange={onChange}></textarea>
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;
