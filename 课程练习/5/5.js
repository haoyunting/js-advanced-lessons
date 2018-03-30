//函数对象

//函数对象对应的类型是Function
//（类似于数组对象对应于Array、日期对象对应于Date）
function foo(){}
console.log(typeof foo); 
function
console.log(foo instanceof Object/function);
true 

//数组创建
var a= new array(5);
length=5
var a=new array("5");
length=1

//new用法
console.log(typeof new Function());
function 
console.log(typeof new new Function());
object

console.log(typeof Array);
function
console.log(typeof new Array());
object

/*内置的函数对象（Array、Function、Date等）
内置的非函数对象（Math、JSON）*/
console.log(Math instanceof Function);
false
console.log(Math instanceof Object);
true

//函数对象属性
/*caller,调用当前函数
callee,返回正执行的函数（可以做匿名函数）
prototype,返回原型*/

Object.__proto__===Function.prototype;
true

//绑定
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();
		foo();
    }
};
obj.test();
23  45

//高阶函数
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);
1
foo(1,1,f3,f2);
2
foo(1,1,f1,f2);
4       //不会一起输出，出现覆盖问题

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
console.log("输出：",obj.fun3()());
console.log("输出：",obj.fun4());
输出： ƒ fun2() {return this.x;}
输出： 12
输出： 34

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
console.log("输出：",obj.fun3()());
console.log("输出：",obj.fun4());
输出： ƒ fun2() { return this; }
输出： Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
输出： {x: 34, fun2: ƒ, fun3: ƒ, fun4: ƒ}

