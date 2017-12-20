/* Анимации */
$(function(){
	
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

});




$(function() {


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	/*$("form").submit(function() { //Change
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
	});*/

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

		}
		if (windowScroll <= 0 ) {
			header.removeClass("fix");
		}
	});
});




// фунция анимация счетчика

function countAnimate(elem) {
	var counter = elem.find('.counter');
	var span = counter.find('span');
	var time = 1500;

	span.each(function(){
		var self = $(this);
		var num = +self.text();
		self.text('0');
		var startNum = 0;
		var interval = setInterval(function(){
			startNum++
			if ( startNum <= num) {
				self.text(startNum);
			}
			else {
				clearInterval(interval);
			}

		},time /  num)

	})
}
// Запуск функции при скроле

$(function() {
	var bootle = $(".bootle_block");

	
		bootle.viewportChecker({
			classToAdd : 'done',
			callbackFunction: function(elem, action){
				countAnimate(elem);
				
			}
		})
	
		

});



// Поиск

$(function() {
	var link = $(".search_button");
	var wrap = $(".search_wrap");
	var input = wrap.find('.search_input');
	var close = wrap.find('.close_search');

	link.on('click', function() {
		wrap.addClass('open');
		return false
	})
	wrap.on('click', function(){
		$(this).removeClass('open');
	})
	close.on('click', function(){
		wrap.removeClass('open');
	})
	// Отмена всплытия
	input.on('click', function(){
		event.stopPropagation();
	})


});

// Выпадающие меню в шапке
if ( $(window).width() > "1200" ) {
	$(function() {
		var target = $("ul.header_nav_ul > li");
		var menu = $("ul.drop_menu");

		target.on('mouseover', function() {
				$(this).find('ul.drop_menu').addClass('opened');
		})
		target.on('mouseout', function() {
			$(this).find('ul.drop_menu').removeClass('opened');
		})


	});
}

// Collapse формы споиска событий
$(function() {
	var link = $('.collapse_link');
	var collapse = $('.filter_block');
	var i = link.find('i');

	link.on('click', function() {
		collapse.slideToggle();
		i.toggleClass('fa-caret-down fa-caret-up')
	})


});