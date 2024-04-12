import Button from '../components/Button'
import Editor from '../components/Editor'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {DiaryDispatchContext} from '../App'
// { text, type, onClick
const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext)
    const nav = useNavigate()

    const onSubmit = (input) => {
        onCreate(input.createDate.getTime(), input.emotionId, input.content)
        nav('/', {replace: true})
    }

    return (
        <div>
            <Header
                leftChild={
                    <Button
                        onClick={() => {
                            nav(-1)
                        }}
                        text={'< 뒤로 가기'}
                    />
                }
                title={'새 일기 쓰기'}
            ></Header>
            <Editor onSubmit={onSubmit} />
        </div>
    )
}
export default New
