//인터페이스 합치기

interface Person {
    name: string;
}
interface Person {
    age: number;
}

//override와 합칠때의 차이를 잘 기억할 것 !
interface Developer extends Person {
    name: 'hello';
}

//동일한 이름으로 중복선언하면, 선언이 합쳐진다.
//선언 머징
const person: Person = {
    name: '',
    age: 1,
};

//선언 머징은 직접 쓸일은 드물고, 모듈의 보강등으로 사용한다.
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    a: number;
    b: number;
    // c: number;
}

const lib: Lib = {
    a: 1,
    b: 2,
};
