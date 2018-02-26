var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");
var main = document.getElementById("main");
var mtitle = document.getElementById("mtitle");
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");

bg1.addEventListener("click",function(){
    main.style.display = "block"
    mtitle.innerHTML = "Head Gear"
    icon1.src = "imgs/gears/h1.png"
    icon2.src = "imgs/gears/h2.png"
    icon3.src = "imgs/gears/h3.png"
});

bg2.addEventListener("click",function(){
    main.style.display = "block"
    mtitle.innerHTML = "Body Gear"
    icon1.src = "imgs/gears/b1.png"
    icon2.src = "imgs/gears/b2.png"
    icon3.src = "imgs/gears/b3.png"
});

bg3.addEventListener("click",function(){
    main.style.display = "block"
    mtitle.innerHTML = "Leg Gear"
    icon1.src = "imgs/gears/l1.png"
    icon2.src = "imgs/gears/l2.png"
    icon3.src = "imgs/gears/l3.png"
});

bg4.addEventListener("click",function(){
    main.style.display = "block"
    mtitle.innerHTML = "Foot Gear"
    icon1.src = "imgs/gears/f1.png"
    icon2.src = "imgs/gears/f2.png"
    icon3.src = "imgs/gears/f3.png"
});


