//프로미스와 제네릭

//프로미스는 제네릭클래스로 타입스크립트에서 설정이 되어있다.
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        reject('~때문에 실패');
    }, 1500);
})
    .then((res) => console.log(res * 10))
    //일반적으로 reject는 타입을 조정할 수 없으므로, 타입좁히기가 필요함
    .catch((rej) => {
        if (typeof rej === 'string') {
            console.log(rej);
        }
    });

//예시 : 프로미스를 반환하는 함수의 타입을 정의
interface Post {
    id: number;
    title: string;
    content: string;
}
//두가지 방법
//1. 리턴문에 Post 전달
//2. 함수에 Promise<> 전달, 주로 사용됨
function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: '게시글 제목',
                content: '게시글 내용',
            });
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id;
});
