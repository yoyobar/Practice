import { useContext } from 'react';
import { TodoDispatchContext } from '../App';

export function useTodoDispatch() {
    const dispatch = useContext(TodoDispatchContext);
    if (!dispatch) throw new Error('TodoDispatchContent');
    return dispatch;
}
