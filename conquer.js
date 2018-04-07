$(function(){
    var $WIN = $(window);

    /*Scroll link*/
	$('.scroll-link').on('click', function(event) {
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
  
	function scrollToID(id, speed){
		var offSet = 0;
		var targetOffset = $(id).offset().top - offSet;
		var mainNav = $('nav');	$('html,body').animate({scrollTop:targetOffset}, speed);
		if (mainNav.hasClass("open")) {
			mainNav.css("height", "1px").removeClass("in").addClass("collapse");
			mainNav.removeClass("open");
		}
	}
	if (typeof console === "undefined") {
		console = {
			log: function() { }
		};
	}

    /* Mobile Menu */ 
    var ssMobileMenu = function() {

		var toggleButton = $('.header-menu-toggle'),
			nav = $('.first-menu');

		toggleButton.on('click', function(event){
			event.preventDefault();
			toggleButton.toggleClass('is-clicked');
			nav.slideToggle();
		});

		if (toggleButton.is(':visible')) nav.addClass('mobile');

		$WIN.on('resize', function() {
			if (toggleButton.is(':visible')) nav.addClass('mobile');
			else nav.removeClass('mobile');
		});

		nav.find('a').on("click", function() {
			if (nav.hasClass('mobile')) {
			   toggleButton.toggleClass('is-clicked');
			   nav.slideToggle(); 
			}
		});
    };
    
    /*Top Button*/
    $WIN.scroll(function(){
        if($WIN.scrollTop()>100){
            $(".top").css("display","block");
        } else {
            $(".top").css("display","none");
        }
    });

    (function ssInit() {
		ssMobileMenu();
    })();
})
