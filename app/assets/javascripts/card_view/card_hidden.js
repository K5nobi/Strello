$(document).ready(function () {

  /* Render Functions */
  var renderCardTitleEdit = function () {
    $('.card-title-detail').addClass('hidden');
    $('.card-title-input').removeClass('hidden');
    //mover focus to textarea
  };

  var renderCardDescriptionEdit = function () {
    $('.card-description-detail').addClass('hidden');
    $('.card-description-input').removeClass('hidden');
  };

  CV.resetAllRender = function () {
    var $inputs = $('.card-page .input');

    $inputs.each(function (index, el) {
      var $el = $(el);
      if (!$el.hasClass('hidden')) {
        $el.parent().children().not('.input').removeClass('hidden');
        $el.addClass('hidden');
      }
    });
  };

  /* Event Functions */
  $('.card-title h3').on('click', function(event) {
    renderCardTitleEdit();
  });

  $('.card-edit-button').on('click', function(event) {
    event.preventDefault();
  });

  $('.card-description-detail').on('click', function(event) {
    renderCardDescriptionEdit();
  });

  $('body').on('click', function(event) {
    var $target = $(event.target);
    if (
      !($target.hasClass('input')) &&
      !($target.parent().hasClass('detail')) &&
      !($target.parent().hasClass('input')
    )) {
      CV.resetAllRender();
    }
  });
});