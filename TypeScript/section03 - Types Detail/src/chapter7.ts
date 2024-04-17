//타입 좁히기
//조건문등을 이용해 넓은타입에서 좁은타입으로
// value => number : tofixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
// 블록 스코프안에서 타입이 좁혀짐

type Person = {
    name: string;
    age: number;
};

function func(value: number | string | Date | null | Person) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
//instance는 해당 객체가 맞는지의 여부
//사용자 타입별칭은 instanceof를 사용할 수 없음.
// && 'property' in 을 사용해서 타입안에 해당 키를 추가로 확인
