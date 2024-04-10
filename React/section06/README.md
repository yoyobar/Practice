![React](https://img.shields.io/badge/-REACT-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)

<img src='https://github.com/yoyobar/React_inflearn_Slice/blob/main/React/section06/public/sample.png'/><br>

간단한 카운트를 작동하는 프로젝트 입니다.

# 알게 된 점

- React에서 컴포넌트를 나누게 되는 기준은 해당 `State`를 누가 관리하느냐가 중요하다.
- 자식요소간의 상호작용을 관리하게 될 경우, 부모요소에서 해당 `State`를 관리한다.
- 이런 부모요소에서 자식 컴포넌트를 관할하는 것을 `State Lifting`이라고 칭한다.
- 값을 띄워야하는 `Viewer.jsx`에게 `count`를, 값을 수정해야하는 `Controller.jsx`에게 부모요소에서 `setCount`를 수정하는 함수(`func`)를 전달


### 기능의 구현 방식
```javascript
//App.jsx
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
```

1. 부모요소에서 `Props`로 `count`의 `state`를 화면을 보여주는 `Viewer.jsx`에게 전달
2. 부모요소에서 `Props`로 함수 `onClickButton`을 전달, 값이 `NaN`이 아닐경우에는 버튼의 기존 값에 더함, `NaN`일 경우 버튼 값을 `초기화`


```javascript
//Controller.jsx
const Controller = ({ func }) => {
    const buttonEvent = (e) => {
        const value = Number(e.target.innerText);
        func(value);
    };

    return (
        <div className='button-box'>
            <button onClick={buttonEvent}>-1</button>
            <button onClick={buttonEvent}>-10</button>
            <button onClick={buttonEvent}>-100</button>
            <button onClick={buttonEvent}>Reset</button>
            <button onClick={buttonEvent}>+100</button>
            <button onClick={buttonEvent}>+10</button>
            <button onClick={buttonEvent}>+1</button>
        </div>
    );
};
export default Controller;
```
1. `buttonEvent`를 각각의 버튼에 할당하고, Reset일 경우 Number로 innerText가 변환될경우 `NaN`이 발생하여 값이 초기화됨. <br>(좋은 방식은 아니다, 별개의 함수로 관리하는게 확실할듯)
2. `Number`가 전달될경우 `props`로 전달받은 `func`에 해당 값을 할당,
3. 이어서 `props`로 전달받은 값을 카운트 화면에 할당 (`Viewer.jsx`)

<hr>

아주 간단한 구조의 토이 프로젝트다. `props`와 `state`의 상태관리, `state lifting`과 `useState`의 사용방법을 확실히 하자.
