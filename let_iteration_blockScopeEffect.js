
{
    let array = []; //関数を入れる配列
    for(let i = 0; i < 3; i++){
        console.log("loop");
        let i = 10;
        array.push(function(){
            ++i;
            console.log(i);
        });
    }
    array[0]();
    array[0]();
    array[0]();
    array[1]();
    array[2]();
    array[2]();
    array[0]();

}
//ループイテレーションごとに関数をつくって、配列arrayに追加している
//()内のletと{}内のletは別物であることがわかる
