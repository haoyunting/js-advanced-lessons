//对象属性特性

//数据属性特性
/*ES中有两种数据结构：对象（哈希表）、数组；ES6中增加了两种：Set和Map
可写特性（[[writable]])，确定属性是否可写性
可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置-
可枚举特性（[[enumerable]]），属性是否可枚举
*/
var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
y 2

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,
    configurable:true,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
Mike
Lucy
undefined

/*给对象添加属性:
直接给对象添加属性（属性特性默认都为true）
通过defineProperty方法添加（属性特性默认为false）
*/
var obj={
    x:1,
    y:2,};
    obj.z=3;
    Object.defineProperty(obj,"w",{value:456,configurable:true});
    for(var k in obj){
    console.log(k,obj[k]);};
x 1
y 2
z 3
console.log(obj.w);
456   //for循环遍历不到

//访问器属性特性
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);
obj2.name="jack";
console.log(obj2.name);
Lucy_hihi
jack_haha_hihi

//属性特性描述符(查看对象属性的特性的对象)
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.getOwnPropertyDescriptor(obj,"x");
{value: 5, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(obj,"y");
{value: 6, writable: false, enumerable: true, configurable: false}

//Object与属性和属性特性相关的方法
/* Object.keys()                 包括可枚举
   Object.getOwnPropertyNames()    包括不可枚举   都返回自身
*/
var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));
console.log(Object.getOwnPropertyNames(o3));
["y"]
(2) ["y", "x"]

/* Object.prototype.hasOwnProperty() 判断自身是否有该属性，不包括可枚举的属性
   Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
  */
console.log(o3.hasOwnProperty("x"));
console.log(o3.propertyIsEnumerable("x"));
true
false

/* in      包括继承的属性，包括不可枚举的属性
   for...in  包括继承的属性，但不包括不可枚举的属性
 */
for(var k in o3){
    console.log(k,o3[k]);
}
console.log("x" in o3,"y" in o3);
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));
y yyy
true true
true true

//JS对象之扩展、密封及冻结

/*扩展:
    Object.isExtensible      是否扩展,新创建的对象默认是可扩展的
    Object.preventExtensions 将原对象变得不可扩展,并且返回原对象.
*/
var obj = {};
var obj2 = Object.preventExtensions(obj);
console.log(obj === obj2);
true

/* 密封:
    限制可配置属性特性,限制添加新属性
*/
var obj = {             
    prop:function(){},
    foo:"bar",
}
var o = Object.seal(obj);
    console.log(o === obj);
    console.log(Object.isSealed(obj));
    obj.foo = "quux";  //仍然可以修改密封对象上的属性的值
    console.log(obj.foo);
true
true
quux

/*冻结:
    限制可写属性特性,限制可配置属性特性,限制添加新属性
*/