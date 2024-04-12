import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div>Wrong Page 404</div>
            <Link to={'/'}>Return</Link>
        </>
    );
};
export default NotFound;
