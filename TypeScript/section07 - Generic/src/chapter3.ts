//제네릭 인터페이스와 타입 별칭

function log<T>(item: T): void {
    return console.log(item);
}
////제네릭 인터페이스

interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair1: KeyPair<string, number> = {
    key: '열쇠',
    value: 1,
};

let keyPair2: KeyPair<string, string> = {
    key: '열쇠',
    value: 'B01',
};

log(keyPair1);
log(keyPair2);

//인덱스 시그니처의 활용
interface NumberMap {
    [key: string]: number;
}

//아무거나 막 넣을 수 있음
interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: 'value',
};
let booleanMap: Map<boolean> = {
    key: true,
};
log(stringMap);
log(booleanMap);

//제네릭 타입 별칭
type Map2<V> = {
    [key: string]: V;
};
let stringMap2: Map2<string> = {
    key: 'test',
};

//제네릭 인터페이스 활용 예시. 유저 관리 프로그램
// 타입가드를 작성하지말고, 제네릭을 활용
interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
    name: '이정환',
    profile: {
        type: 'developer',
        skill: 'typescript',
    },
};
const studentUser: User<Student> = {
    name: '김민수',
    profile: {
        type: 'student',
        school: '명지대',
    },
};
