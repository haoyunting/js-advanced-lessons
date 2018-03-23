obj = {x:2};// ={x:2}为对象初始化表达式
arr = [1,2];// =[1,2]为数组初始化表达式

function foo(){
    var a=b=3;
    //b是全局变量，a是局部变量
}

//ES5 中没有块作用域：
function  sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//严格模式报错，非严格模式输出123

//用this判断是否为严格模式
function isStrictMode() {
    //"use stirct" 
    return this === window?false:true;
}
console.log(isStrictMode());
//一般函数中的this（严格模式）为undefined，非严格下为全局变量

//严格模式下禁止函数参数重名
function f(a, a, b) {
    "use strict";
    return a+b;
}
f(2,3,4);//严格模式下报错

// switch 语句在比较值时使用的是全等操作符,因此不会发生类型转换,判3等
var i = 65;
switch(new Boolean(true)){
    case i>=60:
        alert('及格');
        break;
    case i<60:
        alert('不及格');
        break;
    default:
        alert('default');
}
default
//全为new Boolean也为default
//对象类型判3等看引用是否为同一快内存空间

//算术运算符
console.log(1+{});
1[object Object] ？？？

var i=1;
var y = ++i + ++i + ++i;
console.log(y);
9    // 2+3+4

var x="1";
console.log(x+=2);
12  // +=转换成字符串，++为数值类型

var obj1 = new String("xyz");
var obj2 = new String("xyz");
//两个引用类型比较
console.log(obj1 == new String("xyz"));
false  
console.log(obj2 == obj1);
false  

//引用类型与数据类型比较
console.log("xyz"==obj1);
true
console.log(2 == new Number(2));
true

//逻辑运算符
//两侧不为bBoolean类型,短路原则：
   /*对于&&，
   转换后的左操作数若为true，则直接返回原始右操作数，
   若为false则直接返回原始左操作数 
   对于||，
   转换后的左操作数若为true，则直接返回原始左操作数，
   若为false则直接返回原始右操作数*/

console.log(new Boolean(false)||new Boolean(true));
Boolean {false}
//new Boolean(false)转换成Boolean类型为true
//所有对象转换为布尔类型 都为 true

//函数定义三种方法
function max(a,b){}
var max = function (a,b){};
var max = new Function("a","b","return a>b?a:b");

//对象方法调用
//嵌套函数中的obj不一定是结果，this指代全局
var x=45;
var obj={
x:23,
test:function(){
function foo(){
console.log(this.x);}
foo();}};
obj.test();
45

//添加给对象添加方法
var x=45;
var obj=function(){
    x=3;
};
var test=function(){
console.log("输出:",this.x);
};
obj.test=test;
obj.test();
输出: undefined

//trace追踪 debug调试 (设置断点)步骤执行