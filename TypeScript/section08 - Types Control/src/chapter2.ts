//keyof 연산자
//객체 타입

//프로퍼티가 추가될 때 어떻게 할것인가?
//프로퍼티의 조건을 더 늘리지않고, keyof를 활용해서 추가, 타입이 와야함
function getPropertyKey(person: Person, key: keyof Person) {
    return console.log(person[key]);
}

const person = {
    name: '이정환',
    age: 27,
};

getPropertyKey(person, 'name');

//typeof의 응용
type Person = typeof person;
