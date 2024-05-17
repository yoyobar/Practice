import useTodo from './store';

export default function History({ clickHandler }) {
    const { todo } = useTodo();

    return (
        <div>
            <div className='w-full h-full  absolute opacity-95 top-0 bg-slate-400'>
                <div className='w-full h-full'> 아아</div>
                <button
                    onClick={clickHandler}
                    className='bg-red-500 absolute bottom-0 hover:bg-red-600 mt-2 p-2 w-full rounded-md text-white'
                >
                    닫기
                </button>
            </div>
        </div>
    );
}
