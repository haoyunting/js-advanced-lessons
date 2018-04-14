//闭包(一个函数外加上该函数创建时所建立的作用域)
//以函数对象形式返回
function f(){
    var x=1;
    function f2(){
        return x++;
    }
    return f2();
}
var f3=f();
console.log(f3);
1
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
console.log(f3());
console.log(f3());
1
2

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));
console.log(inc(2));
inc = createInc(5);
console.log(inc(1));
6    //5传参给startValue，inc执行函数
8    //没有被释放
6    //新的闭包

function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());
1
1
0
1    //一个闭包里的函数有影响，重置n的值
2

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age);
bar(10); 
bar(10); 
bar(10); 
15 1    //三级运算符的判断条件为x.count是否存在
15 2
15 3




