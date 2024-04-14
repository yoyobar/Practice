import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
// import Button from './components/Button';
// import Header from './components/Header';
import {createContext, useEffect, useReducer, useRef} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [...state, action.data];
        case 'UPDATE':
            return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
        case 'DELETE':
            return state.filter((item) => String(item.id) !== String(action.data.id));
        case 'RELOAD':
            return action.data;
        default:
            return state;
    }
}
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, [{}]);
    const idRef = useRef(0);
    const dataSaving = useRef(false);

    useEffect(() => {
        if (dataSaving.current) {
            const saveData = JSON.stringify(data);
            localStorage.setItem('title', saveData);
        }
        dataSaving.current = true;
    }, [data]);

    useEffect(() => {
        const loadData = JSON.parse(localStorage.getItem('title'));
        if (loadData === null) {
            return;
        }
        idRef.current = loadData.length - 1;

        dispatch({
            type: 'RELOAD',
            data: loadData,
        });
    }, []);

    //CREATE
    const onCreate = (createDate, emotionId, content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                createDate,
                emotionId,
                content,
            },
        });
    };

    //UPDATE
    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch({
            type: 'UPDATE',
            data: {
                id,
                createDate,
                emotionId,
                content,
            },
        });
    };

    //DELETE
    const onDelete = (id) => {
        dispatch({
            type: 'DELETE',
            data: {
                id,
            },
        });
    };
    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onDelete,
                        onUpdate,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
