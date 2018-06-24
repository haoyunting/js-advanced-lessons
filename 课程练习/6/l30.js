//L30

var f = v => v + 1;
f(2);
//3

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);

var sum = function(a,b,c){
    if(b!=false){b = b||4;}
    if(c!=false){c = c||5;}
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));

//6
//8
//10
//1

function foo(x=5){
    let x = 1;//报错
    const x = 2;//报错
    var x = 3;//正常
}
foo();

function f(x = 1,y) {
    return [x,y];
}
f();
f(2);
f(,3);

//[1,undefined]
//[2,undefined]
//报错

function f(x,y = 1) {
    return [x,y];
}
f();
f(2);

//[undefined, 1]
//[2, 1] 

var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);

//方法被覆盖了

var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1); 
console.log(s2); 
console.log(s1.toString()); 

// Symbol(foo)
// Symbol(bar)
// "Symbol(foo)"

var mySymbol = Symbol();
//一
var a = {};
a[mySymbol] = 'Hello!';
//二
var a = {
    [mySymbol]: 'Hello!'
};
//三
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
a[mySymbol] 

// "Hello!"

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);
console.log(obj[myS2],obj["xx"]);
console.log(obj["myS1"]);
//123 undefined
//456 456
//undefined

var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
// [Symbol(a), Symbol(b)]


var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
// [1, 2, 3, 4]

var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5

s.add(1).add(2).add(2);
s.size 
s.has(1); 
s.has(2); 
s.has(3); 
// 2
// true
// true
// false

for (var item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]


