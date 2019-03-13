$(document).ready(function () {

	//===========ANIMATION============
	$('.js--an-1').waypoint(function (direction) {
		$('.js--an-1').addClass('animated fadeInUp');
	}, {
			offset: '50%'
		});

	$('.js--an-2').waypoint(function (direction) {
		$('.js--an-2').addClass('animated fadeInLeft');
	}, {
			offset: '50%'
		});

	$('.js--an-3').waypoint(function (direction) {
		$('.js--an-3').addClass('animated fadeInRight');
	}, {
			offset: '80%'
		});

	$('.js--an-4').waypoint(function (direction) {
		$('.js--an-4').addClass('animated fadeInUp');
	}, {
			offset: '50%'
		});


	$('.js--an-5').waypoint(function (direction) {
		$('.js--an-5').addClass('animated bounceIn');
	}, {
			offset: '50%'
		});


	//-----------MOBILNE NAV -------------- //
	$(".js--nav-icon").click(function () {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		if (icon.hasClass('fa-bars')) {
			icon.addClass('fa-times');
			nav.addClass('nav__menu-mobile')
			icon.removeClass('fa-bars');
		} else {
			icon.addClass('fa-bars');
			icon.removeClass('fa-times');
			nav.removeClass('nav__menu-mobile')
		};
	})



	//SMOOTH SCROOL ON CLICK

	$(".contact").click(function () {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 900);
	});

	$("#services-nav").click(function () {
		$('html, body').animate({
			scrollTop: $("#services").offset().top
		}, 900);
	});


	//FORM
	$("#form").submit(function (e) {

		var form = $(this);
		var url = form.attr('action');
		var msgResponse = $("#js--response");


		$.ajax({
			type: "POST",
			url: url,
			data: form.serialize(), // serializes the form's elements.
			success: function (data) {
				//clear inputs
				$('.form__input').each(function () { $(this).val('') });
				//succ resp msg
				msgResponse.css({ "color": "#4CAF50" });
				msgResponse.text('Your message was sent successfully!');
			},
			error: function (error) {
				console.log(error);
				//clear inputs
				$('.form__input').each(function () { $(this).val('') });
				msgResponse.css({ "color": "#D9534F" });
				msgResponse.text('Failed to send the email!');
			}
		});

		e.preventDefault(); // avoid to execute the actual submit of the form.
	});

});
