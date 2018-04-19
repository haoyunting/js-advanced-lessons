//js对象

//函数也是构造器，属于内置对象
console.log(typeof Array);
function  //既是function,又是对象。构造函数也是对象
console.log(typeof Math/JSON);
object    //不是function
onsole.log((new(new function()))typeof function);
false     //new function为函数f,再new为对象
onsole.log((new(new function()))typeof object);
true   

// 访问器属性
var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);
1 
2 2

var o = {
    x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);
undefined
2 2

var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
};
console.log(o.x);
o.x = 2;
console.log(o.x);
1
1   //优先级问题

/* 创建对象:
    通过字面量的方式创建
    通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
    构造函数的方式创建JS对象
    */
var o={
    x:12
 };
 o.__proto__ === Object.prototype;
 var o2=Object.create(o); 
 o2.__proto__ === o; 
 true

var per=function(name){
    this.name=name;
}
var p =new per('abc');
p.__proto__===per.prototype;
Per.__proto__ ===Function.prototype;
true

//字符串拼接实现for循环
x1:
x2:
x3:
obj['x'+i]

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}
9
