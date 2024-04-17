//사용자 정의 타입 가드

//서로소로 할 수 없는 경우로 가정,
type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

//리턴 값이 boolean일 경우 is 문법을 활용해서 타입가드로서 명시할 수 있다.
//복잡한 타입의 경우, 사용자 정의타입가드를 사용하는게 나을수도 있다.
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        animal;
    }
    if (isCat(animal)) {
        animal;
    }
}

//서로소로 할 경우, 훨씬 간편하다.
type Doge = {
    name: string;
    isBark: boolean;
    type: 'DOG';
};
type Cate = {
    name: string;
    isScratch: boolean;
    type: 'CAT';
};

type Animals = Doge | Cate;

function warning2(animal: Animals) {
    switch (animal.type) {
        case 'DOG':
            return animal;

        case 'CAT':
            return animal;
    }
}
