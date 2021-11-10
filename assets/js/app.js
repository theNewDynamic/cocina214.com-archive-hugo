var lazysizes = require("lazysizes")
var noscript = require("lazysizes/plugins/noscript/ls.noscript.js")
var bgset = require("lazysizes/plugins/bgset/ls.bgset.js")

document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-bg');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});

var scrollMonitor = require("scrollmonitor"); // if you're not using require, you can use the scrollMonitor global.

$('.section-animate').each(function(index, section) {		
	var sectionWatcher = scrollMonitor.create(section, -150);
	sectionWatcher.enterViewport(function() {
	    section.classList.add('animated');
	});
	// sectionWatcher.exitViewport(function() {
	//     section.classList.remove('animated');
	// });
});


// JS Goes here - ES6 supported
$(document).ready(function() {

	// ---------------------------------------------------------------------------
	// Menu Toggle
	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function() {
    	hamburger.classList.toggle("is-active");
	});

	// ---------------------------------------------------------------------------
	// New Nav
	(function() {
	    function transformStart() {
	        document.querySelector(".js-nav").classList.toggle("is-visible");
	        document.querySelector("body").classList.toggle("overflow-hidden");
	    }
	    document.querySelector("#js-menu").addEventListener("click", transformStart);
	})();

	$(document).ready(function($) {
		setTimeout(function() {
			 $(".css-slider").addClass("load");
		}, 500);
	});
	// ---------------------------------------------------------------------------
	// #js-menu  Show/Hide
	var navButton = document.querySelector('#js-menu');
    navButton.addEventListener('click', function() {
        let expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        let menu = this.nextElementSibling;
        menu.hidden = !menu.hidden;
    });

    
	// ---------------------------------------------------------------------------
	// Image Swaps
	var previewImg = $("img.js-product-photo-featured");
	$(".js-product-photo-grid a:first").addClass("active");
	$(".js-product-photo-grid a img").click(function(){
		var link = $(this).parent();
		var linkHref = link.attr("href");
		var linkAlt = link.attr("alt");
		if( $(link).hasClass("active") == false)
		{
			$("a").removeClass("active");
			link.addClass("active");
			$(previewImg).animate({
				opacity: 0,
			}, 300, function() {
				previewImg.attr("src", linkHref);
				previewImg.attr("alt", linkAlt);
				$(this).animate({
					opacity: 1,
				}, 750
				);
			});
		}
		return false;
	});
	
	/* Snipcart Select */
	$('#js-snipcart-select').change(function() {
		$('#js-snipcart-add-to-cart-button').data('item-custom1-value', $(this).val());
	});
	/* Snipcart Summary */
	$(document).ready(function($) {
			setTimeout(function() {
				$(".snipcart-summary").addClass("css-snipcart-show-hide");
			}, 1);
	});

	// ------------------------------------  -------------------------------------
	// Loaded
	// setTimeout(function() {
	  $('body').addClass('load--done');
	// }, 1500);

    // ------------------------------------------------------------------------
    // Done
	console.log("Cocina214 | Built by Telegraph ");
});

