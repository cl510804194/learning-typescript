let jspang={
    name:'jishupang',
    website:'jspang.com',
    age:18,
    saySomething:function(){
        console.log('为了前端技术')
    }
}
console.log(jspang.name)
jspang.saySomething()
//数组---array  String Date RegExp

// let arr1:number[]
// let arr2:Array<boolean>

//字面量赋值法
//构造函数赋值法

let arr1:number[]=new Array()
let arr2:number[]=new Array(1,2,3,4,5)
let arr3:Array<string>=['jspang','技术胖','金三胖']
let arr4:Array<boolean>=[true,false,false]

let arr5:number[]=[1,2,3]
let x:[string,number]
x=['hello',10]
