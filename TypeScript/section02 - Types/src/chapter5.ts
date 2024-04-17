// enum 타입
// 여러가지 값들에 각각 이름을 부여해, 열거해두고 사용하는 타입
// 컴파일시 사라지지 않음

//숫자형 enum
enum Role {
    ADMIN, //0
    USER, //1
    GUEST, //2
}

//문자형 enum
enum Language {
    korean = 'ko',
    english = 'en',
}

const user1 = {
    name: '김민수',
    role: Role.ADMIN, //관리자
    Language: Language.korean,
};
const user2 = {
    name: '홍길동',
    role: Role.USER, //일반 유저
    Language: Language.english,
};
const user3 = {
    name: '아무개',
    role: Role.GUEST, //게스트
};

console.log(user1, user2, user3);

type Administor = {
    role: 'ADMIN';
    name: string;
};
type User = {
    role: 'USER';
    name: string;
};
type Guest = {
    role: 'GUEST';
    name: null;
};
type Info = Administor | User | Guest;

function userInfo(user: Info) {
    switch (user.role) {
        case 'ADMIN':
            console.log('A');
            break;
        case 'USER':
            console.log('A');
            break;
        case 'GUEST':
            console.log('A');
            break;
    }
}
