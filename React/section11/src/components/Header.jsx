import { useState, memo } from 'react';
import './Header.css';

function Header() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div className='Header'>
            <h1>
                {new Date().toDateString()}
                {` ${time}`}
            </h1>
        </div>
    );
}

export default memo(Header);
