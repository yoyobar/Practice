//인덱스드 엑세스 타입
//객체, 배열, 튜플
//타입으로부터 특정 타입을 뽑아서 적용시켜주는 문법

//객체
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
};

//매개변수를 추가해야될 경우, author의 객체가 추가되는 경우
//안에 들어가는건 값이 아니라 '타입' 이다!
//중첩해서 사용가능 ['author']['id']
//배열의 값을 참고하려면 [number, 0]등
function printAuthorInfo(author: PostList['author']) {
    console.log(`${author.name}-${author.id}`);
}

const post: PostList = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
        id: 1,
        name: '이정환',
    },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number]; //공통 타입
