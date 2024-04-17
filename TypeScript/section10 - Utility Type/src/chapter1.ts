//유틸리티 타입
//타입스크립트에서 미리 만들어놓은 예제
//맵드 타입의 기반 타입

//Partial <T>
//부분적인, 일부분의
//특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변경함

interface Post {
    title: string;
    tag: string[];
    content: string;
    thumbnailURL?: string;
}

//임시 저장 변수
const draft: Partial<Post> = {
    title: '제목 나중에 짓기',
    content: '초안',
};

//직접 구현해보기
//keyof 모든 키를 유니온 타입으로 추출
type Partial<T> = {
    [key in keyof T]?: T[key];
};

//Required <T>
//필수의,
//특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 변경

const withThumbnailPost: Required<Post> = {
    title: '한입 타스 후기',
    tag: ['ts'],
    content: '',
    thumbnailURL: '',
};

//직접 구현해보기
//keyof 모든 키를 유니온 타입으로 추출
//-?
type Required<T> = {
    [key in keyof T]-?: T[key];
};

//Readonly<T>
//읽기 전용
//특정 객체 타입의 모든 프로퍼티를 읽기 전용으로 변경

const readonlyPost: Readonly<Post> = {
    title: '보호된 게시글',
    tag: [],
    content: '',
};

//직접 구현해보기
//keyof 모든 키를 유니온 타입으로 추출
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};
