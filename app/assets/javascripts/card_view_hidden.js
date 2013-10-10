// <script>
// $('#add-item').on('click', function(event) {
//   event.preventDefault();
//   $('#checklist').append('<li><label><input type="text" name="checklist_items[][title]" value=""></label></li>');
// });
//
// $('ul').on('click', '.remove-member', function(event) {
//   event.preventDefault();
//   var memberId = $(event.target).data("id");
//   $('#participants li').filter(function () {
//     if ($(this).data('id') === memberId) {
//       return true;
//     }
//   }).remove();
// });
//
// $('.assign-member').on('click', function(event) {
//   event.preventDefault();
//   var selectedOption = $('#selected-member option:selected');
//   var memberId = selectedOption.val();
//   var memberEmail = selectedOption.text();
//
//   //doesn't add dup
//   var persisted;
//   $('#participants input').each(function(index, input) {
//     if ($(input).val() === memberId) {
//       persisted = true;
//     }
//   });
//
//   if (!persisted && !!memberId) {
//     $('#participants > ul').append('<li data-id="' +
//     memberId + '"><input type="hidden" name="participants[][user_id]" value="' +
//     memberId + '"> ' + memberEmail + '<button class="remove-member" data-id="' +
//     memberId + '"">X</button></li>');
//   }
// });
// </script>

$(document).ready(function () {
  var renderCardTitleEdit = function () {
    $('.card-title-detail').addClass('hidden');
    $('.card-title-input').removeClass('hidden');
    //mover focus to textarea
  };

  var resetAllRender = function () {
    var $inputs = $('.card-page .input');

    $inputs.each(function (index, el) {
      var $el = $(el);
      if (!$el.hasClass('hidden')) {
        // $form = $el.parent().parent();

        $el.parent().children().not('.input').removeClass('hidden');
        $el.addClass('hidden');

        // $form.submit();
      }
    });
  };

  $('.card-title h3').on('click', function(event) {
    renderCardTitleEdit();
  });

  $('body').on('click', function(event) {
    var $target = $(event.target);
    if (
      !($target.hasClass('input')) &&
      !($target.parent().hasClass('detail')) &&
      !($target.parent().hasClass('input')
    )) {
      resetAllRender();
    }
  });
});