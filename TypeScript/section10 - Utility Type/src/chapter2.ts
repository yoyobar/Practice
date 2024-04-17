//유틸리티 타입
//타입스크립트에서 미리 만들어놓은 예제
//맵드 타입의 기반 타입

//Pick<T,K>
//뽑다, 고르다
//객체 타입으로부터 특정 프로퍼티만 골라낸다.

interface Post {
    title: string;
    tag: string[];
    content: string;
    thumbnailURL?: string;
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: '옛날 글',
    content: '옛날 컨텐츠',
};

//직접 만들기
//T에 key만 전달할수 있도록 제약을 검
type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
};

//Omit<T,K>
//생략하다, 빼다
//객체 타입으로부터 특정 프로퍼티만 제거한다.

const noTitlePost: Omit<Post, 'title'> = {
    content: '',
    tag: [],
    thumbnailURL: '',
};

//직접 만들기
//Exclude를 이용해 제거
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

//Record<K, V>
//객체 타입을 만들어주는 유틸리티
//**자주 쓰임

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string; size: number }>;

//직접 만들어보기
type Record<K extends keyof any, V> = {
    [key in K]: V;
};
