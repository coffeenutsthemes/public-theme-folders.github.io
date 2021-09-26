// CNT - Themes for LittleTreasureChest.tumblr.com (C) 2021

// Tutorial found at http://anarchei.me/post/24223347981/how-to-make-a-custom-404-page
$(init);
function init() {
var pageTitle = $('.title').text();
if (pageTitle == "Not Found"){
    $('.post > .title').replaceWith( "<div class='title'>404</div>" );
    $('.post > .text-body p').replaceWith( "<p align='center'>Sorry, the content you are looking for could not be traced.</p><p align='center' style='font-size:8px!important;'><a href='/'>Return back to homepage</a></p>" );
}};
     
$(function($) {var allAccordions = $('.accordion div.data');var allAccordionItems = $('.accordion .accordion-item');$('.accordion > .accordion-item').click(function() {if($(this).hasClass('open')){$(this).removeClass('open');$(this).next().slideUp('500');}else{allAccordions.slideUp('500');allAccordionItems.removeClass('open');$(this).addClass('open');$(this).next().slideDown('500');return false;}});});  
            
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$(function() {
    $("#toTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// V1
// tumblr redirects @ magnusthemes.tumblr
  $('a[href*="t.umblr.com/redirect"]').each(function(){
      var originalURL = $(this).attr("href").split("?z=")[1].split("&t=")[0];
      var replaceURL = decodeURIComponent(originalURL);
      $(this).attr("href", replaceURL);
  });
  

// V2
// REMOVE REDIRECTS V2.0 @ magnusthemes.tumblr
function noHrefLi(){
    var linkSet = document.querySelectorAll('a[href*="href.li/?"]');
    Array.prototype.forEach.call(linkSet,function(el,i){
        var theLink = linkSet[i].getAttribute('href').split("href.li/?")[1];
        linkSet[i].setAttribute("href",theLink);
    });
}
noHrefLi();
