let f1, f2
{ //ブロック1
    let a = 0;
    f1 = function(){
        console.log(++a);
    }
}
{ //ブロック2
    let a = 10;
    f2 = function(){
        console.log(++a);
    }
}

f1();
f1();
f2();
f2();
f1();
