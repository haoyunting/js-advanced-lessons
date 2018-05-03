//原型继承

//使用3种方式来创建对象
//obj1通过字面量方式创建，并创建自身属性x
var obj={}
//obj2通过Object静态方法创建，obj2的原型为obj1，并创建自身属性y
var obj2=Object.create(obj1);
//obj3通过构造函数来创建，构造函数为Obj3
var Obj3=function(){}  //构造函数
var obj3=new Obj3();   //创建对象
//每个对象都有一个原型对象，最原始的原型是null
var a={};
a.__proto__===Object.prototype;
true
a.__proto__.__proto__;
null

//自由属性和继承属性
var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.z = 5;
console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);
obj.z = 8;
console.log(obj.z);
delete obj.z;
console.log(obj.z);
delete obj.z;
console.log(obj.z);
delete  obj.__proto__.z;
console.log(obj.z);

true
5
3
8
3
3
undefined

function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();
Person.__proto__===Function.prototype;
true
Person.__proto__.__proto__===Object.prototype;
true

//深入理解继承

//对象-对象
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
s1.__proto__.name = "Jack";
console.log(s2.name);
s2.__proto__.__proto__.age = 99;
console.log(s2.age);
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
//Mike 22 2017001
//Mike 22 2017001
//Jack
//99
//Jack 99 2017001
//Jack 99 2017001 //资源共享问题，原型共享
s1.name = "Bill";
console.log(s1.name,s1.age,s1.id);
console.log(s2.name,s2.age,s2.id);
//Bill 99 2017001
//Jack 99 2017002

//静态方法是构造器函数对象（类）的方法，原型方法是实例化对象（对象）的原型的方法
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();
var instance1 = new BaseClass();
instance1.f2();
//This is a static method 
//This is a prototype method 

var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();
//1 This is a method in Base.prototype
//2 This is a method in instance1

//constructor
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);
//Constr {name: "Mike"}
//true

function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
console.log(a.privateId);
a.getId();
//123
//undefined
//123 456

function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
Person.prototype = { 
getName:function(){}
}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);
console.log(p.__proto__ === p.constructor.prototype);
console.log(Object.prototype === p.constructor.prototype);
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);
//true
//false
//true
//true