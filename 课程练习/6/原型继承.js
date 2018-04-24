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
