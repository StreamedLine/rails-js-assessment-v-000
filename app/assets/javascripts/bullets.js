//POST BULLET-POINTS TO PAGE
function initializeBulletForm() {
	$('form#new_bullet').on('submit',function(e){
		e.preventDefault();

		var $form = $(this),
				action = $form.attr('action'),
				params = $form.serialize();

		$.ajax({
			url: action,
			data: params,
			dataType: 'json',
			method: 'POST'
		})
		.success(function(response){
				if (response.id != null) {
					var source = $('#bullet_partial').html();
					var template = Handlebars.compile(source);

					$(template(response)).insertBefore('#new_bullet');	
					$('#bullet_nugget').val('');
				}
				$('input[type=submit]').attr('disabled', false);
		});
	})
}

$( document ).on('turbolinks:load', function(){
	if ($('form#new_bullet').length) {
		initializeBulletForm();
	}	
})