//函数声明法
function add(n1:number,n2:number):number{
    return n1+n2;
}

console.log(add(1,2))

//函数表达式法
var add2=function(n1:number,n2:number):number{
    return n1+n2;
}

console.log(add2(1,2))

//完全支持es6
var add3=(n1:number,n2:number):number=>{
    return n1+n2
}
console.log(add2(3,6))