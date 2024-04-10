export default function Button({ text, color, children }) {
    //이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
    };
    return (
        <button onClick={onClickButton} style={{ color: color }}>
            {text} - {color}
            {children}
        </button>
    );
}

//props의 기본 값
Button.defaultProps = {
    color: 'black',
};
