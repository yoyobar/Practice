import {Link} from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
    usePageTitle('알 수 없는 페이지');

    return (
        <>
            <div>Wrong Page 404</div>
            <Link to={'/'}>Return</Link>
        </>
    );
};
export default NotFound;
