

const obj =(function(){
    const array = [100,200,300];
    return{
        CreateIterator: function(){
            let i = 0; //配列のインデックス
            return {
            isDone: function (){ //走査が終了したか
                return i >= array.length;
             },
            Next: function(){ //次の値へ進める
                 ++i;
             },
            currentItem: function(){
                return array[i];
             }
           };
        }
    };
})();

for(const it=obj.CreateIterator();!it.isDone();it.Next()){
    console.log(it.currentItem());
}
//数値であるループカウンタ変数ではなく、データ走査用のオブジェクトなら、
//constでループ変数を設定可能である
//










