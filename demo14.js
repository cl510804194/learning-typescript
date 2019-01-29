"use strict";
// interface Husband{
//     sex:string,
//     interest:string,
//     maiBaoBao?:Boolean
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log('高、富、帅、德', '胖');
console.log(mySearch('高、富、帅、德', '高'));
