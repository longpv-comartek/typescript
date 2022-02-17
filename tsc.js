"use strict";
exports.__esModule = true;
//nếu export thì khi import phải có { đối tượng dùng } export default thì chấm như object
var maths_js_1 = require("./maths.js");
var maths_1 = require("./maths");
console.log(maths_js_1.pi, maths_1["default"].num);
//Type
//Boolean
var isDone = false;
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(octal, binary, hex, decimal);
//String
var color = "blue";
console.log(color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is ".concat(fullName);
console.log(sentence);
//Array
var listN = [1, 2, 3];
var listS = ["a", "b"];
//Tuple
var Tuple = ['tuổi', 3];
//Enum  
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["black"] = 4] = "black";
})(Color || (Color = {}));
var mau = Color[4];
console.log(mau);
var notSure = 4;
notSure = false;
console.log(notSure);
function printCoord(point) {
    console.log(point.x, point.y);
}
var point = { x: 1, y: 1 };
printCoord(point);
function dongvat(dv) {
    console.log(dv.name);
    var b;
}
var dv = {
    name: 'ngỗng'
};
dongvat(dv);
var BadGreeter = /** @class */ (function () {
    function BadGreeter(age, names) {
        this.age = age;
        this.names = names;
        this.k = 4;
        if (age !== undefined)
            this.age = age;
    }
    return BadGreeter;
}());
var greens = new BadGreeter(22, '2022-02-16');
console.log(greens);
