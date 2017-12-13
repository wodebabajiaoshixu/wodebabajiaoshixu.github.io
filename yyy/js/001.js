 var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      scrollbar: {
        el:'.swiper-scrollbar',
        hide: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
     on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });

    var img=document.getElementById("music");
    var mp3Btn=document.getElementById("mp3Btn");
    var ff=1;
    img.onclick=function(){
        if(ff==1){
            img.style.animation="none";
            mp3Btn.pause();
            ff=0;
        }else{
            img.style.animation="img1 4s linear infinite";
            mp3Btn.play();
            ff=1;
        }
    }