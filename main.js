$(document).ready(function() {
  /* Sidebar */
  $('#sidebar-toggle').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('cross');
    $(this).toggleClass('plus');

    if ($(this).hasClass('plus')) {
      $('.sidebar').animate({ left: '-=25%' });
      $('.site-avatar-small').animate({ width: '50px', height: '50px' }).removeClass('hidden');
      $('.right-panel').animate({ width: '100%', 'margin-left': 0 }, 350, 'linear', function() {
        $(this).removeClass('wrapper-right');
        $(this).removeAttr('style');
      }).css('overflow', 'visible');
    } else if ($(this).hasClass('cross')) {
      $('.sidebar').animate({ left: '+=25%' });
      $('.site-avatar-small').animate({ width: 0, height: 0 }).addClass('hidden');
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