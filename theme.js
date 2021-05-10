$(window).scroll(function() {
   
   var height = $(window).scrollTop();
   //console.log(height);
  if (/Mobi/.test(navigator.userAgent)) {
     if(height  > 100) {
        $("#shopify-section-mobile-nav").addClass("site-header-sticky-mbl");
     }else {
        $("#shopify-section-mobile-nav").removeClass("site-header-sticky-mbl");
     } 
  }else{
     if(height  > 150) {
        $("#shopify-section-header-elements").addClass("site-header-sticky");
     }else {
        $("#shopify-section-header-elements").removeClass("site-header-sticky");
     }   
  }
   
 });