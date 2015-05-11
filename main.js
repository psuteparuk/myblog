$(document).ready(function() {
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