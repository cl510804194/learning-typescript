"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Jspang;
}());
var jspangObj = new Jspang('技术胖', 18, 'coding');
jspangObj.interest();
var jsShuai = /** @class */ (function (_super) {
    __extends(jsShuai, _super);
    function jsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    jsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    jsShuai.prototype.zhuanQian = function () {
        console.log('一天赚了一个亿');
    };
    return jsShuai;
}(Jspang));
var shuai = new jsShuai("技术帅", 5, '演讲');
shuai.interest();
shuai.zhuanQian();
