var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500,
        //若为,则是局部变量，若为;则为全局变量
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
500 20 200 600

var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500;
            d = 600;
       
    } 
    bar();//局部定义a所以bar并没有对fn起作用，若把;换成,则出现报错问题，d不被定义
console.log(a,b,c,d);
}
fn();
100 20 200 600

var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500;
            d = 600;
       
    } 
    console.log(a,b,c,d);
    bar();
}
fn();
报错，d没有被定义

//new Function创建的函数对象不一定遵从静态词法作用域

//块作用域变量污染问题
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
    }());
123
//若没有function的匿名函数则输出234

//执行上下文和调用栈call stack
栈底对应的是全局上下文环境，而栈顶对应的是当前正在执行的上下文环境
/*作用域链与上下文用scope看
寻找上下文环境用call stack*/
