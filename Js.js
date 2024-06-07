let pics = document.getElementsByClassName("column");

let i;
function first(){
    for(i = 0; i< pics.length; i++){
        pics[i].style.msFlex = "80%";
        pics[i].style.flex = "80%";
    }
}
function second(){
    for(i = 0; i<pics.length; i++){
        pics[i].style.msFlex = "40%";
        pics[i].style.flex = "40%";

    }
}
function third(){
    for(i = 0; i<pics.length; i++){
        pics[i].style.msFlex ="25%";
        pics[i].style.flex = "25%";
    }
}

let header = document.getElementById("header");
let btns = header.getElementsByClassName("btn");

for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}

//go to top
let topbtn = document.getElementById("TopBtn");

window.onscroll = function(){
    scrollfunction()
}
function scrollfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topbtn.style.display = "block";
    } else{
        topbtn.style.display = "none";
    }
}
function topFunc(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}