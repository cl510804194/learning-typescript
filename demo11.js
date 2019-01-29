"use strict";
//类是对象具体事物的一个抽象  对象是类的具体表现
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log("爸爸好");
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('蹇白洁', 23);
console.log(jiejie);
jiejie.say();
