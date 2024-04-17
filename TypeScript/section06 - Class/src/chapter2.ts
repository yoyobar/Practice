//접근 제어자 (타입스크립트 클래스)
//public private protected
//java랑 똑같네

//public 공개
//private 클래스내부에서만 접근 가능
//protect 클래스내부, 파생클래스에서 접근 가능

//생성자에 접근자를 달면, 자동으로 필드를 생성함, 따라서 constructor 내부도 필요가 없어짐

class Employee {
    //생성자
    constructor(protected name: string, public age: number, public position: string) {}
    //메서드
    work() {
        console.log('일함');
    }
}

//파생 클래스
class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;

    //생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    //메소드
    func() {
        this.name;
    }
}

const employeeA = new Employee('김민수', 27, 'developer');
//employeeA.name = '홍길동'; //name 속성은 private이다
employeeA.age = 27;
employeeA.position = 'FE';
