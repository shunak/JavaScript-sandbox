class ClassA{
    constructor(){
        // this.ipa = ipa//ClassAのインスタンスプロパティの設定
        //インスタンスプロパティはconstructorによって設定される
    }
    //ipa //ClassAのプロトタイプメソッドの記述
}


class ClassB extends ClassA{
    constructor(){
        super();
        //this.ipb = ipb //ClassBのインスタンスプロパティの設定
        //インスタンスプロパティはconstructorによって設定される
    }
    //ipb//ClassBのプロトタイプメソッドの記述
}

//継承元クラス（スーパークラス）のconstructor呼び出しは,super()という記述が、プロトタイプの設定はextendsの記述が担う。


var obj = new ClassB();
console.log(Object.getPrototypeOf(obj)===ClassB.prototype);
console.log(Object.getPrototypeOf(ClassB.prototype)=== ClassA.prototype);





