"use strict";
//变量的作用域,函数划分
var yangzi = '刘德华';
function zhengXing() {
    console.log('技术胖整形成了' + yangzi + '的样子');
}
zhengXing();
console.log(yangzi);
//全局变量 函数体外的变量
//局部变量 函数体内的变量  
// function zhengXing2():void{
//     var yangzia:string="刘德华"
//     {
//         let yangzib:string='小沈阳'
//         console.log('技术胖整形成了'+yangzib+'的样子')
//     }
//     console.log('技术胖整形成了'+yangzia+'的样子')
//     console.log('技术胖整形成了'+yangzib+'的样子')
// }
