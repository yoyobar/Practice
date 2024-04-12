![React](https://img.shields.io/badge/-REACT-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)

<img style= width:400px src=https://github.com/yoyobar/React_inflearn_Slice/blob/main/React/section11/public/sample.png>

CRUD 및 Localstorage를 구현한 투두리스트 입니다.

# 알게 된 점
 - [렌더링, useEffect](https://plaid-plow-0e3.notion.site/useEffect-a214c8a2dfb14bd3b959d8798c2f3e66?pvs=74)
 - [메모이제이션과 useMemo, useCallback](https://plaid-plow-0e3.notion.site/useMemo-useCallback-98649a65522d49cd9456d00fa4121586)
 - [Props Drilling과 useContext](https://plaid-plow-0e3.notion.site/Props-drilling-useContext-f9e44e83d44e46929825d063150fee6d)

### 기능의 구현 방식

`useReducer`를 활용하여 부모 컴포넌트 `App.jsx`가 관리하는 Todos의 CRUD를 구현 하였다.<br>
`useReducer`는 최초 상태와 `dispatch`를 가지는데, 이 `dispatch`에 변화를 줄 함수를 외부에서 case로 관리하면서 작성했다.<br>
2가지 인자를 가진다. 첫번째 인자는 `state`로, 기존 값을 의미한다. 두번째 인자는 `action`으로, 이 `action`으로 상태변화를 적용한다.

```javascript
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'RELOAD':
            return action.data;
        case 'UPDATE':
            return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
        case 'DELETE':
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}
```
`dispatch`에는 원하는 값을 보내주면되는데, 보통 `.type`으로 명시하여 전달한다.

---

`useEffect`를 활용하여 첫 렌더링 직후 한번 실행되는 로컬 스토리지 불러오기, 첫 렌더링 이후 실행되는 로컬 스토리지의 저장을 구현하였다.

```javascript
 //localStorage 저장
    useEffect(() => {
        if (loaded.current) {
            const saveData = JSON.stringify(todos);
            localStorage.setItem('todo', saveData);
            return;
        }
        loaded.current = true;
    }, [todos]);

//localStorage 불러오기
    useEffect(() => {
        const loadData = JSON.parse(localStorage.getItem('todo'));
        if (loadData) {
            dispatch({
                type: 'RELOAD',
                data: loadData,
            });
        }
    }, []);
```

---

`useContext`를 활용하여 자식의 자식요소에게 props를 전달하고 작동하며,<br> `useMemo`를 활용하여 생성/업데이트/삭제시 전체가 다시 재렌더링 되는경우를 막았다.
```javascript
//context
export const TodoStateContext = createContext();
//메모이제이션 context
export const TodoDispatchContext = createContext();

(...)


    const memoizedDispatch = useMemo(() => {
        return { onCreate, onUpdate, onDelete };
    }, [onCreate, onUpdate, onDelete]);

    return (
        <div className='App'>
            <Header />
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor />
                    <List />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
```
