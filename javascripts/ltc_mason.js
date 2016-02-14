/*
*
* CUSTOMIZED BY COFFEENUTSTHEMES (C)
*
*/

$(function () {
    var $container = $('#entryposts');
    $container.masonry({itemSelector: '.entries'}),
    
    $container.infinitescroll({
        navSelector : 'div#pagination', 
        nextSelector : 'div#pagination a#nextPage',  
        itemSelector : '.entries',
        loading: {
            finishedMsg: ' End of blog...',
            img: 'http://static.tumblr.com/qvqnij2/wlkmvr6f1/ajax-loader.gif'
    },
            
        bufferPx : 11600,
        extraScrollPx: 12000,
        debug : false,
        errorCallback: function() {
            jQuery('a.ends').delay(10).fadeOut(100);
        },

    },
    
    
function(newElements) {
    var $newElems = $(newElements).css({opacity: 0});
    $newElems.imagesLoaded(function(){
    $newElems.animate({opacity: 1});
    $container.masonry('appended', $newElems, true); 
    });
  });
  $(window).unbind('.infscr');
    $('a#load-more').click(function() {
        $container.infinitescroll('retrieve');
    return false;
    });
});

$(function() {
var $container = $('#entryposts');
$container.imagesLoaded( function() {
     $container.masonry();
    });

    $('#entryposts').masonry({
      isAnimated: true,
      isAnimated: !Modernizr.csstransitions
    });
    
  });
  
