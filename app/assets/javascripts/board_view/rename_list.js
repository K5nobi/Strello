$(document).ready(function () {
	var resetRenameListForm = function ($list) {
		$('.list').each(function () {
			var $dat = $(this);
			
			if ($dat.data('id') !== $list.data('id')) {
				$dat.children('.rename-list').addClass('hidden');
				$dat.children('h4').removeClass('hidden');
			}
		});
	};
	
  $('.list h4').on('click', function () {
  	console.log('clicked');
		var $target = $(event.target);
		var $form = $target.closest('.list').children('.rename-list');
		
		$target.closest('h4').addClass('hidden');
				
		$form.removeClass('hidden');
		$form.children('textarea').focus();

  });

	
	$('body').on('click', function (event) {
		var $target = $(event.target);
		var $list = $();
					
		if (
			$target.closest('.rename-list').length !== 0 ||
			$target.closest('.list h4').length !== 0 
		) {
			$list = $target.closest('.list');
		}
		
		resetRenameListForm($list);
	});
});