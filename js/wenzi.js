/**
 * Created by 20160228 on 2017/8/17.
 */
var a=$(".weng")
var b=$(".wen")
var c=$(".s-one")
//console.log(b)
c.mouseover(function(){
    c.css('background',"#F6CFD2")
    //c.style('background','red')
    b.css("color","#D5B374")
    a.css("color","#D5B374")
})
c.mouseout(function(){
    c.css('background',"white")
    //c.style('background','red')
    b.css("color","#d2d2d2")
    a.css("color","#d2d2d2")
})