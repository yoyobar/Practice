import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'
// import Button from './components/Button';
// import Header from './components/Header';
import {createContext, useReducer, useRef} from 'react'

const mockData = [
    {
        id: 1,
        createDate: new Date('2024-04-19').getTime(),
        emotionId: 1,
        content: '1번일기 내용',
    },
    {
        id: 2,
        createDate: new Date('2024-04-18').getTime(),
        emotionId: 2,
        content: '2번일기 내용',
    },
    {
        id: 3,
        createDate: new Date('2024-03-18').getTime(),
        emotionId: 3,
        content: '3번일기 내용',
    },
]

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [...state, action.data]
        case 'UPDATE':
            return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item))
        case 'DELETE':
            return state.filter((item) => String(item.id) !== String(action.data.id))
        default:
            return state
    }
}
export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
    const [data, dispatch] = useReducer(reducer, mockData)
    const idRef = useRef(4)

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
        })
    }

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
        })
    }

    //DELETE
    const onDelete = (id) => {
        dispatch({
            type: 'DELETE',
            data: {
                id,
            },
        })
    }
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
    )
}

export default App
