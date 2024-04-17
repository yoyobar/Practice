//클래스 복습

let studentA = {
    name: '이정환',
    grade: 'A+',
    age: 27,
    study() {
        console.log('공부함');
    },
    introduce() {
        console.log('안녕');
    },
};

class Student {
    // 필드
    name;
    grade;
    age;

    //생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //메서드
    study() {
        console.log(`${this.name} 공부중`);
    }
    introduce() {
        console.log(`${this.name}: 안녕`);
    }
}

//클래스롤 이용해서 만든 객체 -> 인스턴스
let studentB = new Student('홍길동', 'A+', 27);
// studentB.study();
// studentB.introduce();

//상속 클래스
class StudentDeveloper extends Student {
    //필드
    favoriteSkill;

    //생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    //메서드
    programming() {
        console.log(`${this.favoriteSkill} 로 개발중`);
    }
}

const studentDeveloper = new StudentDeveloper('김민수', 'A', 27, 'TS');
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();
