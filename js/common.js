/* Анимации */
$(function(){
	/*$(".who").animated("zoomIn");
	$(".designer").animated("bounceInDown");
	$(".programmer").animated("bounceInRight");
	$(".account_manager").animated("bounceInUp");
	$(".header_end p").animated("slideInLeft");
	$(".ul_container").animated("fadeInRight");*/
	
		setTimeout(function () {
		    $(".first").animated("fadeInLeft");
		}, 500)
		setTimeout(function () {
		    $(".second").animated("fadeInLeft");
		}, 300)
		setTimeout(function () {
		    $(".third").animated("fadeInLeft");
		}, 500)
		setTimeout(function () {
		    $(".animate_img").animated("fadeInRight");
		}, 500)

	
	//$(".gallery_block").animated("fadeInRight");

});




$(function() {


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

// Прелоадер


var images = document.images;
var images_total_count = images.length;
var images_loaded_count = 0;
var progress = document.getElementById('progress');

for (var i = 0; i < images_total_count; i++) {
	image_clone = new Image();
	image_clone.onload = loaded;
	image_clone.onerror = loaded;
	image_clone.src = images[i].src;

}
function loaded() {
	images_loaded_count++;		
	progress.innerHTML = ((( 100 / images_total_count ) * images_loaded_count ) << 0 ) + '%';

	if ( images_loaded_count >= images_total_count) {
		setTimeout(function () {
			$(".preload .inner").fadeOut();
			$(".preload").fadeOut("slow");
		}, 500)
	}

} 






// Мобильное меню
$(function(){
	var menuBtn = $('.mob_menu_btn');
	var menu = $('.header_nav');
	var link = menu.find('a');
	var drop = menu.find('.drop_menu');

	menuBtn.on('click', function(){
		menu.slideToggle();
	})

	function linkBlock() {
		if ( $(window).width() < "1200" ) {
			link.on('click', function(){
				if( $(this).siblings('ul.drop_menu').length > 0 ) {
					drop.not($(this).siblings()).slideUp();
					$(this).siblings('ul.drop_menu').slideToggle();
					return false;
				}
			})
		} else {
			link.off('click');
		}
	}
	$(window).on('load',linkBlock);
})


// Смещение шапки в момент скрола

	$(function() {
		var header = $("header");
		var offset = $(header).offset().top;
		var section = $('.header_section');

		$(window).scroll(function (){
			var windowScroll = $(window).scrollTop();
			if (windowScroll > header.height()) {

				header.addClass("fix");
				section.css('padding-top', header.height()+ 'px');

			}
			if (windowScroll <= 0 ) {
				header.removeClass("fix");
				section.css('padding-top', '0');
			}
		});
	});