//리렌더링 조건
//1. State 값이 변경
//2. Props 값이 변경
//3. 부모 컴포넌트가 리렌더링 될 경우
//불필요한 리렌더링을 막기위해 컴포넌트를 분리
import HookExam from './components/HookExam';
import Register from './components/Register';

export default function App() {
    return (
        <>
            <HookExam />
        </>
    );
}
