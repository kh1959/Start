function newslist() {
// 保存時にUTF-8を指定しないと文字ばけ
var news = { 
'yyyymmdd':'「」'
};
var newsmmdd = { 
'0407':'「誕生日」',
'mmdd':'「」'
};

var nowdate = new Date();
var yyyy = nowdate.getFullYear(); // 年 
var heisei = yyyy - 1988; // 平成 
var shouwa = yyyy - 1925; // 昭和 
var mm  = nowdate.getMonth() + 1; // 月 
var dd = nowdate.getDate(); // 日 
var mmdd = mm * 100 + dd
var yyyymmdd = yyyy * 10000 + mmdd
var youbi = ["日","月","火","水","木","金","土"];
var aaa = youbi[nowdate.getDay()];
var myYMD = ' <span style="color:red;">' + mm.toString() + '/' + dd.toString() + '</span>(' + aaa + ')';
myYMD = myYMD + ' 西暦<span style="color:red;">' + yyyy.toString() + '</span>年';
myYMD = myYMD + ' 平成<span style="color:red;">' + heisei.toString() + '</span>年'
myYMD = myYMD + ' 昭和<span style="color:red;">' + shouwa.toString() + '</span>年'

myNews = ''
if ( yyyymmdd.toString() in news )
{
var myNews = news[yyyymmdd.toString()]
}

myNewsmmdd = ''
if ( mmdd.toString() in newsmmdd )
{
var myNewsmmdd = newsmmdd[mmdd.toString()]
}

var myLine = myYMD + ' ' + myNews + ' ' + myNewsmmdd;
document.write(myLine);

}
