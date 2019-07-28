$(function () {

// with Masonry & jQuery
// init Masonry
var $grid = $('#content').masonry({
  itemSelector: '.posts',
  columnWidth: 100,
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});
 
// get Masonry instance
var msnry = $grid.data('masonry');

$grid.infiniteScroll({
  path:"#pagination a#nextPage",
  button:"a.ends",
  scrollThreshold:!1,
  status: '.page-load-status',
  append: '.posts',
  outlayer: msnry,
});

$('.page-load-status').hide();

});
