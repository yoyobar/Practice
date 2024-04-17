//맵드 타입
//객체 타입
//기존의 객체를 변환하며 사용, 인터페이스 사용불가
//활용도가 높고, 자주쓰임

interface User {
    id: number;
    name: string;
    age: number;
}

//key가 무엇이 될 수 있고, 어떤 밸류타입을 가질것인지
type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
    [key in keyof User]?: boolean;
};

type ReadOnlyUser = {
    readonly [key in keyof User]: User[key];
};
//한명의 유저정보를 불러오는 기능

function fetchUser(): ReadOnlyUser {
    //...기능
    return {
        id: 1,
        name: '이정환',
        age: 27,
    };
}

//한명의 유저정보를 수정하는 기능
function updateUser(user: PartialUser) {
    //수정하는 기능
}

//** 변경되는 값만 보내고 싶음 **/
updateUser({
    age: 28,
});
