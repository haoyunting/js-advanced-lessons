//Date

//new Date( )	返回当前时间
var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);
//object
console.log(d2,typeof d2);
//string

//静态方法（Date构造器函数对象的方法）
console.log(Date.now());
//1525868210183 以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
Date.parse(dateTimeString) //转成毫秒，从1970年1月1日 00:00:00开始计算


//原型方法
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//2 1978 10 6 25 8

console.log(Date.parse("2010-01-01 11:12:23.111"));
//1262315543111  
console.log(new Date("2010-01-01 11:12:23.111"));
//Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());
//2018-05-09T12:23:44.443Z
