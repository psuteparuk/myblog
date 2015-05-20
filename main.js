$(document).ready(function() {
  /* Nav */
  $('.masthead nav a').each(function() {
    if ($(this).prop('href') == [location.protocol, '//', location.host, location.pathname].join('')) {
      $(this).addClass('active');
    }
  });

  /* Sidebar */
  var $mainArticle = $('.post.main-article');
  $('#sidebar-toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('cross');
    $(this).toggleClass('plus');

    if ($(this).hasClass('plus')) {
      $('.sidebar').animate({ left: '-=25%' });
      $('.site-avatar-small').animate({ width: '50px', height: '50px' }).removeClass('hidden');
      $('nav a').animate({ 'margin-left': '30px' }, 'fast');
      $mainArticle.animate({ 'max-width': '45rem' }).addClass('.main-article');
      $('.right-panel').animate({ width: '100%', 'margin-left': 0 }, 350, 'linear', function() {
        $(this).removeClass('wrapper-right');
        $(this).removeAttr('style');
      }).css('overflow', 'visible');
    } else if ($(this).hasClass('cross')) {
      $('.sidebar').animate({ left: '+=25%' });
      $('.site-avatar-small').animate({ width: 0, height: 0 }).addClass('hidden');
      $('nav a').animate({ 'margin-left': '20px' }, 'fast');
      $mainArticle.animate({ 'max-width': '100%' }).removeClass('.main-article');
      $('.right-panel').animate({ width: '75%', 'margin-left': '25%' }, 350, 'linear', function() {
        $(this).addClass('wrapper-right');
        $(this).removeAttr('style');
      }).css('overflow', 'visible');
    }

    $(this).toggleClass('rotate');
    $(this).toggleClass('rotate-reset');
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