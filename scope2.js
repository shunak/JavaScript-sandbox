let a = 0;
let f1, f2;
{ //ブロック1
    f1 = function(){
        console.log(++a);
    }
}
{//ブロック2
    f2 = function(){
        console.log(++a);
    }

}


f1();
f1();
f2();
f2();
f1();




