//nếu export thì khi import phải có { đối tượng dùng } export default thì chấm như object
import { pi } from './maths.js'
import num from './maths'
import { reduce } from 'lodash';
console.log(pi, num.num);

//Type
//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(octal, binary, hex, decimal);

//String
let color: string = "blue";
console.log(color);
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;
console.log(sentence);

//Array
let listN: number[] = [1, 2, 3];
let listS: string[] = ["a", "b"]

//Tuple
let Tuple: [string, number] = ['tuổi', 3]

//Enum  
enum Color {
    red,
    Green = 3,
    black,
}
let mau: string = Color[4];
console.log(mau);
let notSure: unknown = 4;
notSure = false;
console.log(notSure);

//Interfaces
interface Point {
    x: number;
    y: number
}
function printCoord(point: Point) {
    console.log(point.x, point.y);
}
const point = { x: 1, y: 1 };
printCoord(point)

interface Animal {
    name: string
}
interface Bear extends Animal {
    age: number
}
function dongvat<B extends Bear, A extends Animal>(dv: A) {
    console.log(dv.name)
    let b: B

}
const dv = {
    name: 'ngỗng'
}

dongvat(dv)
class BadGreeter {
    name!: string;
    k = 4;
    constructor(readonly age: number, readonly names: string) {
        if (age !== undefined) this.age = age
    }
}

const greens = new BadGreeter(22, '2022-02-16')
console.log(greens);

//Mô tả một đối tượng
interface KeyValueProcessor {
    (key: number, value: string): void;
};

function addKeyValue(key: number, value: string): void {
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value: string): void {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve

//classes

interface TaskInterface {
    id: number;
    name: string;
    age: number;
    eat(): void;
}
const task: TaskInterface[] = [{
    id: 1,
    name: 'ngỗng',
    age: 12,
    eat: () => {
        console.log(2);
    }
}]

class Dongvat implements TaskInterface {
    face: string;
    id: number;
    name: string;
    age: number
    constructor(id: number, name: string, age: number, face: string) {
        this.face = face;
        this.id = id;
        this.name = name;
        this.age = age
    }
    eat(): void {
        console.log(1);
    }
}