//unknown 타입 (전체 집합)

function unKnownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unKnownVar: unknown;
    // error ! let num:number = unKnownVar
    // error ! let str:string = unKnownVar
    // error ! let bool:boolean = unKnownVar
    // 다운캐스팅은 불가능 함
}

//never 타입 (공 집합)
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
    // 모든 업 캐스팅은 가능함

    // let never1: never = 10;
    // let never2: never = 'string';
    // let never3: never = true;
}

//void 타입
function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined;
    }

    //undefined는 업캐스팅이라 가능함
    let voidVar: void = undefined;
}

//any 타입, 타입계층도를 무시
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    //업, 다운을 무시함

    //neverVar = anyVar;
    //never는 공집합이므로 불가능
}
