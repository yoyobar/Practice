//타입 스크립트의 클래스

class Employee {
    //필드
    name: string;
    age: number;
    position: string;
    //생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    //메서드
    work() {
        console.log('일함');
    }
}
//상속
class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;

    //생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    //메소드
}

const employeeB = new Employee('이정환', 27, '개발자');
employeeB.work();

//클래스의 타입을 받아옴
const employeeC: Employee = {
    name: '',
    age: 0,
    position: '',
    work() {
        console.log('');
    },
};
