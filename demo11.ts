//类是对象具体事物的一个抽象  对象是类的具体表现
class XiaoJieJie{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log("爸爸好")
    }

}

let jiejie:XiaoJieJie=new XiaoJieJie('蹇白洁',23)
console.log(jiejie)
jiejie.say()
