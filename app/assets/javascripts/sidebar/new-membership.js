$(document).ready(function () {
/* Render Functions */
	var renderNewMemberForm = function () {
		$('#new-membership-form').removeClass('hidden');
		$('#new-membership-form').children('label').children('input').focus();
	};
	
	var derenderNewMemberForm = function () {
		$('#new-membership-form').addClass('hidden');
	};
	
	$('#board-sidebar > button').on('click', function (event) {
		if ($('#new-membership-form').hasClass('hidden')) {
			renderNewMemberForm();
		} else {
			derenderNewMemberForm();
		}
	});
	
	$('body').on('click', function (event) {
		var $target = $(event.target);
		
		if (
			!($target.is('#new-membership-form')) &&
			!($target.parent().is('#new-membership-form')) &&
			!($target.parent().parent().is('#new-membership-form')) &&
			!($target.is('#new-membership-button')) &&
			!($target.parent().is('#new-membership-button')) &&
			!($target.parent().parent().is('#new-membership-button'))
		) {
			derenderNewMemberForm();
		}
	});
	
	$('#new-membership-form .exit').on('click', function (event) {
		derenderNewMemberForm();
	});
	
/* Submit Functions */
	var appendMemberAvatar = function (memberData) {
		var $avatarLi = $('<li>');
		
		$avatarLi.html(JST['avatar']({
			user: memberData
		}));
		
		$('#member-list').append($avatarLi);
	};
	
	$('#new-membership-form').on('ajax:success', function(event, data) {
		var $form = $(this);
		
		appendMemberAvatar(data);
		
		$form[0].reset();
		derenderNewMemberForm();
	});
	
	
});