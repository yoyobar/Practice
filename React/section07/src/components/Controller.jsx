const Controller = ({ func }) => {
    const buttonEvent = (e) => {
        const value = Number(e.target.innerText);
        func(value);
    };

    return (
        <div className='button-box'>
            <button onClick={buttonEvent}>-1</button>
            <button onClick={buttonEvent}>-10</button>
            <button onClick={buttonEvent}>-100</button>
            <button onClick={buttonEvent}>Reset</button>
            <button onClick={buttonEvent}>+100</button>
            <button onClick={buttonEvent}>+10</button>
            <button onClick={buttonEvent}>+1</button>
        </div>
    );
};
export default Controller;
