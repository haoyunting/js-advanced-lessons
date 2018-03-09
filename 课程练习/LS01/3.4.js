var obj={a:12,bb:{c:"ab"}};
console.log(typeof NaN); //object类型
//赋值举例
var obj_a={v:"a"};                          
var obj_b=obj_a;   //同一片内存                         
obj_b.v="b";       //b改,a也改                          
console.log(obj_a,obj_b);              
obj_b={v:"c"};                                 
console.log(obj_a,obj_b);
//判等
var a=[1,2];
var b=[1,2];
a==b;      false  //内存空间不同
b=a;
a===b;     true   //指向同一片内存