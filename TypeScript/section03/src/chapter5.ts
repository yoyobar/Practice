//타입 추론, 초기값을 기준으로 판단함
//타입을 추론할 때, 범용적으로 추론해줌 (타입 넓히기)

let a = 10;
let b = 'hello';
let c = {
    id: 1,
    name: '김민수',
    profile: {
        nickname: 'yoyobar',
    },
    urls: ['#'],
};

let { id, name, profile } = c;
let [one, two, three] = [1, 'hello', true];

//함수는 반환값 기준으로 추론, 매개변수는 기본값 기준
function func(message = 'hello') {
    return 'hello';
}

//처음에는 any, 그후 할당 기준으로 타입이 바뀜
//any타입의 진화, 암묵적 any타입
//권장하지 않음
let d;

d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();

// const는 리터럴 타입으로 들어감
const num = 10;
const str = 'hello';

let arr = [1, 'string'];
