function searchXiaoJieJie(...xuqiu:string[]):string{
    let yy:string='找到了'
   
    for(let i=0;i<xuqiu.length;i++){
        yy=yy+xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'.'
        }
    }
   yy=yy+'的小姐姐'
   return yy
}

var age:number=18

var result:string=searchXiaoJieJie('22岁',"大长腿",'瓜子腿','水蛇腰')
console.log(result)