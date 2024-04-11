import { useReducer } from 'react';

//dispatch가 전달됨
function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return state + action.data;
        case 'DECREASE':
            return state - action.data;
        default:
            return state;
    }
}

export default function Exam() {
    //dispatch 상태변화를 알리는 함수
    //객체로 전달해야함
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickMinus = () => {
        dispatch({
            type: 'DECREASE',
            data: 1,
        });
    };

    const onClickPlus = () => {
        //인수 : 상태가 어떻게 변화되길 원하는지
        //type, data, 액션 객체
        dispatch({
            type: 'INCREASE',
            data: 1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
}
