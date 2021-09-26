(function($) {
//https://www.py4u.net/discuss/285954
var $container = $('#content');

    $container.masonry({
        itemSelector: '.posts',
        columnWidth: 2,
        gutter: 4,
        fitWidth: true,
        visibleStyle: { transform: 'translateY(0)', opacity: 1 },
        hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
        isAnimated: !Modernizr.csstransitions
    });
    
var msnry = $container.data('masonry');


    $container.infiniteScroll({
          path:"#infinite_pagination a#nextPage",
          button:"a.ends",
          scrollThreshold:false,
          status: '.page-load-status',
          append: '.posts',
          outlayer: msnry,
          debug: true,
          prefill: true,
    });
    
$('.page-load-status').hide();


var $grid = $('.posts');
    $grid.hide(); 
    
    $container.imagesLoaded(function(){
        $grid.fadeIn('slow');
            $container.masonry({
            itemSelector : '.posts'});
    },
    
function(newElements) {
    var $newElems = $(newElements).css({opacity:0});

    $newElems.imagesLoaded(function(){
        $container.masonry('appended', $newElems, true);
        $newElems.animate({opacity: 1});
        });
    });     

$(window).resize(function(){
    $container.masonry();
});

})(jQuery); 

$(function(){$("[title]").style_my_tooltips({tip_follows_cursor:true,tip_delay_time:200,tip_fade_speed:500});});
