// JSX 주의
//1. 중괄호내에는 자바스크립트 표현식만 넣을 수 있다.
//2. 숫자, 문자열, 배열 값만 렌더링된다.
//3. 모든 태그는 닫혀있어야한다.
//4. 최상위 태그는 하나여야만 한다.
import './Main.css';

export default function Main() {
    const user = {
        name: '이정환',
        isLogin: true,
    };

    return (
        <main>
            <h1>main</h1>
            {user.isLogin ? <div className='logout'>로그아웃</div> : <div>로그인</div>}
        </main>
    );
}
