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
    },
    
function(newElements) {
    var $newElems = $( newElements ).css({ opacity: 0 });
    $newElems.imagesLoaded(function(){
    $newElems.animate({ opacity: 1 });
    $container.masonry( 'appended', $newElems, true ); 
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
  
  
// Tutorial found at http://anarchei.me/post/24223347981/how-to-make-a-custom-404-page
$(init);
function init() {
var pageTitle = $('.title').text();
if (pageTitle == "Not Found"){
    $('.entries > .title').replaceWith( "<center><div class='title'>404</div></center>" );
    $('.entries > p').replaceWith( "<center><p>Sorry, the content you're looking for could not be traced.</p><p style='font-size:8px!important;'><a href='/'>Return back to homepage</a></p></center>" );
}}
