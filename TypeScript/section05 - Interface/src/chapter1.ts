//인터페이스 확장, 상속 ..extends
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    name: 'hello'; //정의를 바꿀 수 있음, 원본타입의 서브타입인것만,
    isBark: boolean; //상위요소가 type이여도 가능함
}
interface Cat extends Animal {
    isScratch: boolean;
}
interface Chicken extends Animal {
    isFly: boolean;
}

const dog: Dog = {
    isBark: true,
    name: 'hello',
    age: 13,
};

//직접 작성할 경우 힘듬

interface CatChicken extends Chicken, Cat {}
//다중확장 가능
const catChicken: CatChicken = {
    isFly: true,
    isScratch: true,
    name: '모모',
    age: 13,
};
