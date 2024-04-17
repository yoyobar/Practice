import { useTodoDispatch } from '../hooks/useTodoDispatch';
import { Todo } from '../types';

interface Props extends Todo {}

export default function TodoItem(props: Props) {
    const dispatch = useTodoDispatch();

    const onClickButton = () => {
        dispatch.onClickDelete(props.id);
    };

    return (
        <div className=' space-x-10 justify-center p-4 m-2 flex bg-slate-300 rounded-sm '>
            <div className='flex-1'>{props.content}</div>
            <button className='bg-red-300 text-sm p-1 text-white  rounded-md hover:bg-red-500' onClick={onClickButton}>
                삭제
            </button>
        </div>
    );
}
