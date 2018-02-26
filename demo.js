var prev = document.getElementById("prev");
var next = document.getElementById("next");
var combo = document.getElementById("combo");
var b1 = document.getElementById("hatButton");
var b2 = document.getElementById("bodyButton");
var b3 = document.getElementById("legButton");
var b4 = document.getElementById("footButton");
var i1 = document.getElementById("hatImg");
var i2 = document.getElementById("bodyImg");
var i3 = document.getElementById("legImg");
var i4 = document.getElementById("footImg");

var ch1 = 1;
var ch2 = 1;
var ch3 = 1;
var ch4 = 1;

prev.addEventListener("click", function(){
    if (b1.checked){
        ch1--
        if (ch1 < 1){
            ch1 = 3
        }
        i1.src = "imgs/gears/h"+ch1+".png"
    } else if (b2.checked){
        ch2--
        if (ch2 < 1){
            ch2 = 3
        }
        i2.src = "imgs/gears/b"+ch2+".png"
    } else if (b3.checked){
        ch3--
        if (ch3 < 1){
            ch3 = 3
        }
        i3.src = "imgs/gears/l"+ch3+".png"
    } else if (b4.checked){
        ch4--
        if (ch4 < 1){
            ch4 = 3
        }
        i4.src = "imgs/gears/f"+ch4+".png"
    } else {
        alert("Choose an option")
    }
});

next.addEventListener("click", function(){
    if (b1.checked){
        ch1++
        if (ch1 > 3){
            ch1 = 1
        }
        i1.src = "imgs/gears/h"+ch1+".png"
    } else if (b2.checked){
        ch2++
        if (ch2 < 3){
            ch2 = 1
        }
        i2.src = "imgs/gears/b"+ch2+".png"
    } else if (b3.checked){
        ch3++
        if (ch3 < 3){
            ch3 = 1
        }
        i3.src = "imgs/gears/l"+ch3+".png"
    } else if (b4.checked){
        ch4++
        if (ch4 < 3){
            ch4 = 1
        }
        i4.src = "imgs/gears/f"+ch4+".png"
    } else {
        alert("Choose an option")
    }
});

combo.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        
        if(combo.value == "combo1"){
            ch1 = 1;
            ch2 = 1;
            ch3 = 1;
            ch4 = 1;
            
            i1.src = "imgs/gears/h"+ch1+".png";
            i2.src = "imgs/gears/b"+ch2+".png";
            i3.src = "imgs/gears/l"+ch3+".png";
            i4.src = "imgs/gears/f"+ch4+".png";
            
            combo.value = ""
        } else if(combo.value == "combo2"){
            ch1 = 2;
            ch2 = 2;
            ch3 = 2;
            ch4 = 2;
            
            i1.src = "imgs/gears/h"+ch1+".png";
            i2.src = "imgs/gears/b"+ch2+".png";
            i3.src = "imgs/gears/l"+ch3+".png";
            i4.src = "imgs/gears/f"+ch4+".png";
            
            combo.value = ""
        } else if(combo.value == "combo3"){
            ch1 = 3;
            ch2 = 3;
            ch3 = 3;
            ch4 = 3;
            
            i1.src = "imgs/gears/h"+ch1+".png";
            i2.src = "imgs/gears/b"+ch2+".png";
            i3.src = "imgs/gears/l"+ch3+".png";
            i4.src = "imgs/gears/f"+ch4+".png";
            
            combo.value = ""
        } else if(combo.value == "random"){
            ch1 = Math.floor((Math.random() * 3) + 1);
            ch2 = Math.floor((Math.random() * 3) + 1);
            ch3 = Math.floor((Math.random() * 3) + 1);
            ch4 = Math.floor((Math.random() * 3) + 1);
            
            i1.src = "imgs/gears/h"+ch1+".png";
            i2.src = "imgs/gears/b"+ch2+".png";
            i3.src = "imgs/gears/l"+ch3+".png";
            i4.src = "imgs/gears/f"+ch4+".png";
            
            combo.value = ""
        }
    }
});