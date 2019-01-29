"use strict";
function searchXiaoJieJie() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '.';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var age = 18;
var result = searchXiaoJieJie('22岁', "大长腿", '瓜子腿', '水蛇腰');
console.log(result);
