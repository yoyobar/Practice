//인터페이스 문법, 객체의 타입지정에 더욱 유리함
//규약, 약속

interface IPerson {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

const person: IPerson = {
    name: '이정환',
    sayHi: function () {
        console.log('hi');
    },
};

person.sayHi();
person.sayHi(2, 3);
