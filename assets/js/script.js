$(function () {
    "use strict"

	//  Fixed Header
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 110) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
		if (scrolling > 0) {
			$(".banner__image").addClass("banner__image--out")
		} else{
			$(".banner__image").removeClass("banner__image--out")
		}
	});

	// scroll top
	$(".scroll-top").on("click", function () {
		$("html,body").animate(
			{
				scrollTop: 0,
			},50,
		);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	// Closes responsive menu when a scroll link is clicked
	$(".nav-link").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});

	// Bootstrap form validation
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
			}
			form.classList.add('was-validated');
		}, false);
		});
	}, false);

	// Veno box popup
    $('.venobox').venobox({
        bgcolor: '#ffffff',
        spinner: 'wandering-cubes',
    });

	// AOS
	$(document).ready(function () {
		AOS.init({
			duration: 1000,
		});
	});

	/*  XZoom init */
	(function() {
		$('.xzoom--products-details').xzoom({
			position: 'lens',
			tint: '#000000',
			lens: true,
			lensShape: "circle",
			fadeOut: true,
			sourceClass: 'xzoom-hidden'
		});
	})();

});
