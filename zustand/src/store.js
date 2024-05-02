import { create } from 'zustand';

//? 주스탄드 실습

//? set method로 상태를 변경할 수 있음
//! 첫번째 콜백으로 원하는 매개변수를 받아옴, 선택
//! 두번째 콜백으로 현재 state의 값을 받아옴, 선택

const add = (description, state) => {
    return [
        ...state.todo,
        {
            id: new Date().getTime(),
            description: description,
            completed: false,
        },
    ];
};

const useTodo = create((set) => ({
    todo: [
        {
            id: 313141,
            description: '디자인 테스트',
            completed: true,
        },
    ],
    addTodo: (description) => {
        set((state) => ({
            todo: add(description, state),
        }));
    },
    removeTodo: (todoId) => {
        set((state) => ({
            todo: state.todo.filter((item) => {
                return Number(item.id) !== Number(todoId);
            }),
        }));
    },
    changeTodo: (todoId, text) => {
        set((state) => ({
            todo: state.todo.map((item) => {
                if (Number(item.id) === Number(todoId)) {
                    return {
                        ...item,
                        description: text,
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            }),
        }));
    },
    checkTodo: (todoId) => {
        set((state) => ({
            todo: state.todo.map((item) => {
                if (Number(item.id) === Number(todoId)) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            }),
        }));
    },
}));

export default useTodo;
