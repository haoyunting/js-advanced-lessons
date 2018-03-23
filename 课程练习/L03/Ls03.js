//包装对象
var a = 123;
var b = new Number(a);
console.log(a == b);
console.log(a === b); //两种不同数据类型
true
false

//临时包装对象
//基本数据对象:
var str = "abcde";
console.log(str.length);//临时包装成了String对象
5
str.length = 1;
console.log(str.length,str);//"abcde" 临时包装对象并不影响原始值
5

//引用数据对象：
var arr = [1,2,3,4];
console.log(arr.length);
4
arr.length = 1;
console.log(arr.length,arr);
1 [1]

//数据类型转换
if(new Boolean(false)){
    console.log("执行");
}  //执行

//Number:
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true

//Number对象继承的方法:
var n1 = 12345.6789;
console.log(n1.toFixed(2));
12345.68
console.log(n1.toPrecision(2));
1.2e+4
console.log(n1.toString());
12345.6789
console.log(n1.toExponential(2));
1.23e+4

//String:
//字符串比较
console.log("A" > "a");
false
console.log("B".localeCompare("A"));
1

//String对象继承的方法
var str = "abcdef"
console.log(str.slice(2));
cdef
console.log(str.slice(2,-2));
cd
console.log(str.charAt(2));
c
console.log(str.charCodeAt(3));
100
console.log(str.indexOf("d",4));//从第4个开始找
9

var arr = "abcdef"
console.log(arr.split("c"));
["ab", "def"]
console.log(arr.split("c",1));//选取长度
["ab"]

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
console.log(str13.substr(2,5));//后一个参数代表长度
cdefg
console.log(str13.substring(2,5));//后一个参数代表第几个end
cde

//Boolean:所有对象都是真值
console.log(Boolean("abc"));
true
console.log(Boolean({}));
true

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

//trace追踪 debug调试 (设置断点)