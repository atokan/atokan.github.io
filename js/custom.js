/*
* Theme Name: Invention
* Theme URI: http://www.jozoor.com
* Description: Invention Theme for corporate and creative sites, responsive and clean layout, more than color skins
* Author: Jozoor team
* Author URI: http://www.jozoor.com
* Version: 1.0
*/

/*
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
=     00   00 00 00   00 00 00   00 00 00   00 00 00   00 00    =
=     00   00    00        00    00    00   00    00   00       =
=     00   00    00      00      00    00   00    00   00       =
=     00   00    00    00        00    00   00    00   00       =
=  00 00   00 00 00   00 00 00   00 00 00   00 00 00   00       =
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/

jQuery(document).ready(function($) {

// Navigational Menu ddsmoothmenu
ddsmoothmenu.init({
	mainmenuid: "menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'navigation', //class added to menu's outer DIV
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

// works hover effect
$('.recent-work .item').hover(function(){
	$(".img-caption", this).stop().animate({top:'0'},{queue:false,duration:400});
}, function() {
	$(".img-caption", this).stop().animate({top:'100%'},{queue:false,duration:400});
});

$('.portfolio .item').hover(function(){
	$(".img-caption", this).stop().animate({top:'0'},{queue:false,duration:400});
}, function() {
	$(".img-caption", this).stop().animate({top:'100%'},{queue:false,duration:400});
});

$('.gallery .item').hover(function(){
	$(".img-caption", this).stop().animate({top:'0'},{queue:false,duration:400});
}, function() {
	$(".img-caption", this).stop().animate({top:'100%'},{queue:false,duration:400});
});

// Tooltips
/* Adding a colortip to any tag with a data attribute: */
$('[data]').colorTip({color:'yellow'});

// UItoTop plugin
$().UItoTop({ easingType: 'easeOutQuart' });

// reponsive menu
$("#menu > a").click(function () {
      $("#menu > ul").slideToggle("fast");
});

(function ($) {
$('#menu > a').bind('click', function () {
	$('#menu #nav').hide();

  if ($(this).hasClass('current')) {
	  $(this).removeClass('current');
	  $(this).parent().parent().find('#menu > ul').slideUp('fast');

	  return false;
  } else {
	  $(this).addClass('current');
	  $('#menu').removeClass('navigation');
	  $('#menu').addClass('responsive');
	  $(this).parent().parent().find('#menu > ul').slideDown('fast');

	  return false;
  }
} );


$(window).bind('resize', function () {
  if ($(this).width() > 944) {
	  $('#menu > a').removeClass('current');
	  $('#menu').removeClass('responsive');
	  $('#menu').addClass('navigation');
	  $('#menu > ul').removeAttr('style');
  } else {
	  $('#menu').removeClass('navigation');
	  $('#menu').addClass('responsive');
  }
} );
} )(jQuery);



// Touch-friendly drop-down navigation
$( '#menu li:has(ul)' ).doubleTapToGo();

$(function() {
    $('#menu a').each(function() {
        if ( $(this).parent('li').children('ul').size() > 0 ) {
            $(this).append('<i class="icon-angle-down responsive"></i>');
        }
    });
});

$("a.down-button").click(function () {
      $(".slidedown").slideToggle("slow");
});

// top bar show & hide
(function ($) {
$('a.down-button').bind('click', function () {
  if ($(this).hasClass('current')) {
	  $(this).removeClass('current');
	  $('a.down-button > i').removeClass('icon-angle-up');
	  $('a.down-button > i').addClass('icon-angle-down');
	  $(this).parent().parent().find('.slidedown').slideUp('slow');

	  return false;
  } else {
	  $(this).addClass('current');
	  $('a.down-button > i').removeClass('icon-angle-down');
	  $('a.down-button > i').addClass('icon-angle-up');
	  $(this).parent().parent().find('.slidedown').slideDown('slow');

	  return false;
  }
} );


$(window).bind('resize', function () {
  if ($(this).width() > 768) {
	  $('a.down-button').removeClass('current');
	  $('a.down-button > i').removeClass('icon-angle-up');
	  $('a.down-button > i').addClass('icon-angle-down');
	  $('.slidedown').removeAttr('style');
  }
} );
} )(jQuery);

// Progress Bar
setTimeout(function(){
$('.meter .meter-content').each(function() {
var me = $(this);
var perc = me.attr("data-percentage");
var current_perc = 0;
var progress = setInterval(function() {
if (current_perc>=perc) {
	clearInterval(progress);
} else {
	current_perc +=1;
	me.css('width', (current_perc)+'%');
}
me.text((current_perc)+'%');
}, 10);
});
},10);

// Alert Boxes
$(".hideit").click(function() {
  $(this).fadeOut(600);
});

// Toggle
$('#toggle-view li h4').click(function () {

var text = $(this).siblings('div.panel');

if (text.is(':hidden')) {
	text.slideDown('200');
	$(this).siblings('span').html('-');
} else {
	text.slideUp('200');
	$(this).siblings('span').html('+');
}
});

/* FancyBox plugin */
$('.fancybox').fancybox({

prevEffect : 'none',
nextEffect : 'none',
loop : false

});


/* header fixed with sticky plugin */
$("header.fixed .main-header").sticky({ topSpacing: 0 });
/* this for header 3 and 5
$("header.fixed .down-header").sticky({ topSpacing: 0 });
*/
$('.sticky-wrapper').removeAttr('style');

});
