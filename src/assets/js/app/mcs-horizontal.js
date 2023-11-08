
 if ($(window).width() > 900) {
  $(window).on("load",function(){
    $(".mcs-horizontal").mCustomScrollbar({
      axis:"x",
      theme:"dark-3",
      mouseWheel:false,
      moveDragger:true,
      contentTouchScroll: true,
      documentTouchScroll: true
    });
  });

 }else{
   $(".filter-product .product-finder .product-checkbox-wrap ul").mCustomScrollbar({
     theme:"dark",
   });
 }





