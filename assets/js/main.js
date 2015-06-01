$(document).ready(function() {
  /* Nav */
  $('.masthead nav a').each(function() {
    if ($(this).prop('href') == [location.protocol, '//', location.host, location.pathname].join('')) {
      $(this).addClass('active');
    }
  });

  /* Posts Animation on Homepage */
  var $indexPosts = $('.post-index .post-wrap');
  var indexPostsAnimate = function() {
    if ($indexPosts.length) {
      var topOfWindow = $(window).scrollTop();
      var windowHeight = $(window).height();
      $indexPosts.each(function() {
        var postPos = $(this).offset().top;
        if (postPos < topOfWindow + (windowHeight / 1.4)) {
          $(this).addClass('fadein-down');
        }
      });
    }
  };

  setTimeout(indexPostsAnimate, 1000);
  $(window).on('scroll', function() {
    indexPostsAnimate();
  });

  /* Mobile Menu */
  $('#mobile-menu-toggle').click(function(e) {
    e.preventDefault();
    $('nav').slideToggle();
    $(this).toggleClass('close');
  });

  $(window).resize(function() {
    var w = $(window).width();
    if (w > 320 && $('nav').is(':hidden')) {
      $('nav').removeAttr('style');
    }
  });

  /* Categories and Tags */
  var switchTab = function($tab) {
    $('.category-panel a, .tag-panel a').removeClass('active');
    $tab.addClass('active');
    window.location = $tab.attr('href');

    $('.tab-pane').hide();
    var tabname = $tab.attr('name');
    $('.tab-pane[name="' + tabname + '"]').show();
  };

  $('.category-panel a, .tag-panel a').click(function(e) {
    e.preventDefault();
    switchTab($(this));
  });

  var bookmark = window.location.hash;
  if (bookmark && bookmark[0] === '#') {
    var aSelector = 'a[name="' + bookmark.substr(1) + '"]';
    switchTab($('.category-panel ' + aSelector + ', .tag-panel ' + aSelector));
  }
});