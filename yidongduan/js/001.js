var boss=document.querySelector(".boss");
var
img1=document.getElementById("img1");
var
bossimg=document.getElementById("bossimg");
var
pack=1;
img1.onclick=function(){
        boss.style.left=0;
    if(pack==0){
      
        pack=1;
    }
}
bossimg.onclick=function(){
        boss.style.left="-100%";
    if(pack==1){
       
        pack=0;
    }
};

var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });