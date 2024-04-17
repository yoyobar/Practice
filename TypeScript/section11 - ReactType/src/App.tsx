import { useEffect, useReducer, useRef } from 'react';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';
import React from 'react';

//TypeScript에서 액션개체의 타입을 정의해놓기 때문에, 말도안되는 액션호출을 막을 수 있다.
type Action =
    | {
          type: 'CREATE';
          data: {
              id: number;
              content: string;
          };
      }
    | { type: 'DELETE'; id: number };

function reducer(state: Todo[], action: Action) {
    switch (action.type) {
        case 'CREATE': {
            return [...state, action.data];
        }
        case 'DELETE': {
            return state.filter((it) => it.id !== action.id);
        }
    }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
    onClickAdd: (text: string) => void;
    onClickDelete: (id: number) => void;
} | null>(null);

function App() {
    const [todo, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    const onClickAdd = (text: string) => {
        if (text === '') {
            return alert('No Null Input');
        }
        dispatch({
            type: 'CREATE',
            data: {
                id: new Date().getTime(),
                content: text,
            },
        });
    };

    const onClickDelete = (id: number) => {
        dispatch({
            type: 'DELETE',
            id: id,
        });
        idRef.current--;
    };
    return (
        <>
            <h1 className='text-center p-2 text-2xl text-white bg-indigo-400 rounded   '>Todo</h1>
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
                    <Editor />
                    <div>
                        {todo.map((item) => (
                            <TodoItem key={item.id} {...item} />
                        ))}
                    </div>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </>
    );
}

export default App;
