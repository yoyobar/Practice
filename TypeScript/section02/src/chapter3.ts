//객체 리터럴 타입, 구조적 타입 시스템(property based type system)
let user: {
    id?: number; //선택적 프로퍼티 (Optional property)
    name: string;
} = {
    id: 1,
    name: '이정환',
};

user = {
    name: '홍길동',
};

//property 키 값 고정
let config: {
    readonly apiKey: string;
} = {
    apiKey: 'MY API KEY',
};
