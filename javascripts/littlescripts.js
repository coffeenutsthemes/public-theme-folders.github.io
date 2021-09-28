// uploaded by CNT - CNB - Piera for LittleTreasureChest (2021)

(function($) {
    
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
          path:"a#nextPage",
          append: '.posts',
          button:"a.ends",
          status: '.page-load-status',
          outlayer: msnry,
          debug: true,
          prefill: true,
          scrollThreshold:false
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
