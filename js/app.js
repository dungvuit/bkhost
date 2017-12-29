jQuery(document).ready(function(){
  jQuery('.btn-go-top').on('click', function(){
    jQuery('body,html').animate({
      'scrollTop': 0
    }, 500)
  });
  jQuery('.slide-layer-17').on('click', function(){
    jQuery('.slide-layer-17').removeClass('active');
    jQuery(this).addClass('active');
  });
});