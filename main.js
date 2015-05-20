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

    $(this).toggleClass('show-sidebar');
    $(this).toggleClass('rotate');
    $(this).toggleClass('rotate-reset');

    $('.sidebar').toggleClass('slide-in');
    $('.site-avatar-small').toggleClass('reduce');
    $('nav a').toggleClass('reduce');
    $('.post.main-article').toggleClass('sidebar-view');
    $('.right-panel').toggleClass('sidebar-view');
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