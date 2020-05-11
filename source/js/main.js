// Add your script here
jQuery(document).ready(function($) {
    //灯箱
    $(".post-content img:not(.avatar)").each(function(){
      var _b = $("<a></a>").attr("href",this.src);
      $(this).wrap(_b);
    })
    $(".post-content a[rel!=link]:has(img)").slimbox();
    //相对时间
    $.lately({'target' : '.post-date'});
    //文章toc固定
    var nav = $(".tocify");
    if(nav.length > 0){
      nav.removeClass("hide");
      var navTop = $(".post-content").offset().top;
      var w = $(window).width()/2 + 400;
      nav.css("left", w);
      nav.css("top", navTop);
      $(window).scroll(function() {
          var scrolls = $(this).scrollTop();
          if (scrolls > navTop) {
            nav.css({"top":0,"position":"fixed"});
          } else {
            nav.css({"top":navTop,"position":"absolute"});
          };
      });
    }