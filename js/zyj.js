/**
 * Created by zhangyijie on 2017/8/31.
 */
var a=document.getElementsByClassName("img-oa")[0].querySelectorAll("div")
//console.log(a)
for(var i=0;i< a.length;i++) {
    a[i].onclick = function () {
          var one=this.getElementsByTagName("img")[0].src;
          console.log(one)
          //alert()
          var two=document.createElement("img");
          two.src=one;
          two.className="zyj"
          document.getElementsByClassName("img-tenn")[0].appendChild(two)
    }
}
//olis[i].onclick=function(){
////            alert(123)
////            console.log(this.src)
////            two.src=""
//    var one=this.getElementsByTagName("img")[0].src;
//    var two=document.createElement("img");
//    two.src=one;
//    two.className="zyj"
//    document.getElementsByClassName("footer")[0].appendChild(two);
//
//}