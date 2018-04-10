//立即执行表达式 IIFE(加;)
//避免代码污染

/*常见两种形式
(function(){}())
(function(){})()*/

0 && function(x,y){return x==y?x:y;}("5",5);
0
!function(x,y){return x==y?x:y;}("5",5);
false
//先进行短路原则判断，然后看函数后是否有()判断是否立即执行

function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
10

function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
3

function f(){
    var getNumFuncs = [];
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
9
function f(){
    var getNumFuncs = [];
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();
10