//호환성

let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
// num2 = num1 부모를 참조할 수 없음

//객체 타입간의 호환성

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: '기린',
    color: 'yellow',
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
};

animal = dog;
//animal이 슈퍼타입
//dog가 서브타입
//프로퍼티를 기준으로 나뉨, 구조적 타입 시스템
//객체중에 name과 color가 있으면 전부 Animal 타입이다~

//super
type Book = {
    name: string;
    price: number;
};

//sub
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'react',
};

book = programmingBook;
// O

//programmingBook = book
// X

//초과 프로퍼티, 실제 타입에 정의되어있지 않는경우 막음
//변수에 할당하여 사용하는 경우 검사를 무시할 수 있음
let book2: Book = {
    name: '한입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: 'react',
};

let book3: Book = programmingBook;

//함수에 경우도 마찬가지임
function func(book: Book): void {
    let book4 = book;
    console.log(book4);
}
func(programmingBook);
