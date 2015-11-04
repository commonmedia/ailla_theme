/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function ($, Drupal, window, document, undefined) {
$(window).load(function() {
  
  $('#block-system-main-menu div.content > ul.menu').find("> li.expanded").each(function(){
    $(this).removeClass('expanded');
    $(this).addClass('collapsed');
  });

  function update_header_position() {
    if ($('#admin-menu').length > 0) {
      $('#wrap').css('margin-top', ($('#admin-menu').height()));
    }
  }

  $(window).resize(function() {
    update_header_position();
  });

  // Fixes an issue in flexslider and Chrome.
  $(window).trigger('resize');

  // Custom main menu code.
  $('#block-system-main-menu div.content > ul.menu > li').mouseenter(function() {
    if ($(this).find("ul").css("display") == 'none') {
      $(this).find("ul").show('fast');
      $(this).removeClass('collapsed');
      $(this).addClass('expanded');
    }
  });
  $('#block-system-main-menu').mouseleave(function() {
    $('#block-system-main-menu div.content > ul.menu > li').find("ul").hide('fast');
    $('#block-system-main-menu div.content > ul.menu').find("> li.expanded").each(function(){
      $(this).removeClass('expanded');
      $(this).addClass('collapsed');
    });
  });
});

})(jQuery, Drupal, this, this.document);