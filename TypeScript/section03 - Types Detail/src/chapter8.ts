//서로소 유니온 타입
//타입 좁히기의 유용한 방법
//교집합이 없는 타일들로만 만든 유니온 타입

type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
};
type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
};
type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

//Admin -> {name}님 현재까지 {kickCount}명 강퇴함
//Member -> {name}님 현재까지 {point}모았음
//Guest -> {name}님 현재까지 {visitCount}번 왔음
function login(user: User) {
    switch (user.tag) {
        case 'ADMIN':
            console.log(`${user.name}님 지금까지 ${user.kickCount}명 강퇴함`);
            break;
        case 'MEMBER':
            console.log(`${user.name}님 지금까지 ${user.point}모았음`);
            break;
        case 'GUEST':
            console.log(`${user.name}님 지금까지 ${user.visitCount}번 왔음`);
            break;
    }
}

//복습
//비동기 작업 결과 처리 객체
type LoadingTask = {
    state: 'LOADING';
};
type FailedTask = {
    state: 'FAILED';
    error: {
        message: string;
    };
};
type SuccessTask = {
    state: 'SUCCESS';
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
    switch (task.state) {
        case 'LOADING':
            console.log('Loading');
            break;
        case 'FAILED':
            console.log('Error');
            console.log(task.error.message);
            break;
        case 'SUCCESS':
            console.log('success');
            console.log(task.response.data);
            break;
    }
}

const loading: LoadingTask = {
    state: 'LOADING',
};
const failed: FailedTask = {
    state: 'FAILED',
    error: {
        message: '오류 발생',
    },
};
const success: SuccessTask = {
    state: 'SUCCESS',
    response: {
        data: '데이터 ~~',
    },
};
