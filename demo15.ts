namespace shuaiGe{
    export class Dehua{
        public name:string="刘德华"
        Talk(){
            console.log("我是刘德华")
        }
    }
}

namespace bajie{
    export class Dehua{
        public name:string="马德华"
        Talk(){
            console.log("我是马德华")
        }
    }
}

let dehua1:shuaiGe.Dehua=new shuaiGe.Dehua()
let dehua2:bajie.Dehua=new bajie.Dehua()
dehua1.Talk()
dehua2.Talk()