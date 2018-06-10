//解构赋值

var [a, b, c] = [1, 2, 3];
console.log(a,b,c);

let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null

//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);

var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); 
console.log(y); 
// "Hello"
// "World

var {x4:y4 = 3} = {};
console.log(y4); 
// 3

const [a, b, c, d, e] = 'hello';
console.log(a); 
// "h"

let {length : len} = 'hello';
console.log(len); 
// 5

function add([x, y]){
    return x + y;
}
add([1, 2]); 
// 3

function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); 
// [3, 4]

function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); 
console.log(move2({x: 3})); 
console.log(move2({})); 
console.log(move2()); 
// [3, 8]
// [3, undefined]
// [undefined, undefined]
// [0, 0]

var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42, "OK", [867, 5309]