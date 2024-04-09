// JSX 주의
//1. 중괄호내에는 자바스크립트 표현식만 넣을 수 있다.
//2.

export default function Main() {
    const number = 10;
    return (
        <main>
            <h1>main</h1>
            <h2>{number % 2 === 0 ? '짝수' : '홀수'}</h2>
        </main>
    );
}
