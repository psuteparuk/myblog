$(document).ready(function() {
  /* Sidebar */
  var $wrapperRightList = $('.wrapper-right');
  $('#sidebar-toggle').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('cross')) {
      $(this).removeClass('cross');
      $(this).addClass('plus');
      $('.sidebar').animate({ left: '-=25%' });
      $('.site-avatar-small').removeClass('hidden');
      $wrapperRightList.animate({ width: '100%', 'margin-left': 0 }, 350, 'linear', function() {
        $wrapperRightList.removeClass('wrapper-right');
        $wrapperRightList.removeAttr('style');
      });
    } else if ($(this).hasClass('plus')) {
      $(this).removeClass('plus');
      $(this).addClass('cross');
      $('.sidebar').animate({ left: '+=25%' });
      $('.site-avatar-small').addClass('hidden');
      $wrapperRightList.animate({ width: '75%', 'margin-left': '25%' }, 350, 'linear', function() {
        $wrapperRightList.addClass('wrapper-right');
        $wrapperRightList.removeAttr('style');
      });
    }
  });

  /* Categories and Tags */
  $('.category-panel a').click(function(e) {
    e.preventDefault();
    $('.category-panel a').removeClass('active');
    $(this).addClass('active');

    $('.tab-pane').hide();
    var idArr = $(this).attr('id').split('-');
    idArr.pop();
    $('#' + idArr.join('-')).show();
  });
});