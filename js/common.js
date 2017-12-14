$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


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