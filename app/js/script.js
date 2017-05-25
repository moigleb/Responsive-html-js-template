"use strict";

$(function() {
	/*POPUP SEARCH*/
	var p = $('.popup-overlay');
	$('#popup-toggle').on("click", function() {
	    p.css('display', 'block');
	    $('.icon-wrap').css('z-index','-1');
	 	$('.prod-wrap-item .new-green:before').css('z-index','-1');
	    $('body').css('overflow-y', 'hidden');
	});
	p.on("click", function(event) {
		var e = event || window.event;
	    if (e.target == this) {
	    	$('body').css('overflow-y', 'auto');
	        $(p).css('display', 'none');
	        $('.icon-wrap').css('z-index','0');
	 		$('.prod-wrap-item .new-green:before').css('z-index','2');
	    }
	});
	$('.popup-close').on("click", function() {
	    $('body').css('overflow-y', 'auto');
		p.css('display', 'none');
		$('.icon-wrap').css('z-index','0');
	 	$('.prod-wrap-item .new-green:before').css('z-index','2');
	});
	/*POPUP BUY ONE CLICK*/
		var p4 = $('.popup-one-click');
	$('#popup-toggle-buy').on("click", function() {
	    p4.css('display', 'block');
	    $('body').css('overflow-y', 'hidden');
	});
	p4.on("click", function(event) {
	    var e = event || window.event;
	    if (e.target == this) {
	    	$('body').css('overflow-y', 'auto');
	        $(p4).css('display', 'none');
	    }
	});
	$('.popup-close-buy').on("click", function() {
	    $('body').css('overflow-y', 'auto');
		p4.css('display', 'none')
	});
	/*POPUP MOBILE MNU*/
	var pw = $('.popup-window')
	$('.toggle-mnu').on("click", function() {
		$(this).addClass("hidden");
	    pw.css('display', 'block');
		$(".content").addClass("hidden");
		$(".hidden-mnu").fadeIn();
	});
	pw.on("click", function(event) {
	    var e = event || window.event
	    if (e.target == this) {
			$('.popup-window').css('display', 'none');
			$('.toggle-mnu').removeClass("hidden");
			$('.toggle-mnu').css("display", "block");
			$(".content").removeClass("hidden");
			$(".hidden-mnu").fadeOut();
			$('body').css('overflow-y', 'auto');
			$(this).toggleClass("on");
	    }
	});
	$('.toggle-mnu-closed').on("click", function() {
		pw.css('display', 'none');
		$('.toggle-mnu').removeClass("hidden");
		$('.toggle-mnu').css("display", "block");
		$(".content").removeClass("hidden");
		$(".hidden-mnu").fadeOut();
	    $('body').css('overflow-y', 'auto');
	});
	/*POPUP MOBILE MNU DARK*/
	var pw = $('.popup-window');
	$('.toggle-mnu-dark').on("click", function() {
		$(this).addClass("hidden");
	    pw.css('display', 'block');
		$(".content").addClass("hidden");
		$(".hidden-mnu").fadeIn();
	});
	pw.on("click", function(event) {
	    var e = event || window.event;
	    if (e.target == this) {
			$('.popup-window').css('display', 'none');
			$('.toggle-mnu-dark').removeClass("hidden");
			$('.toggle-mnu-dark').css("display", "block");
			$(".content").removeClass("hidden");
			$(".hidden-mnu").fadeOut();
			$('body').css('overflow-y', 'auto');
			$(this).toggleClass("on");
	    }
	});
	$('.toggle-mnu-closed').on("click", function() {
		pw.css('display', 'none');
		$('.toggle-mnu-dark').removeClass("hidden");
		$('.toggle-mnu-dark').css("display", "block");
		$(".content").removeClass("hidden");
		$(".hidden-mnu").fadeOut();
	    $('body').css('overflow-y', 'auto');
	});
	var owl = $(".slider");
	owl.owlCarousel({
		autoplay:true,
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navText: "",
		autoHeight: true,
		smartSpeed:1000
	});
	var owl = $(".slider-feedback");
	owl.owlCarousel({
		autoplay:true,
		loop: true,
		items: 1,
		itemClass: "slide-wrap-feedback",
		nav: true,
		navText: "",
		autoHeight: true,
		smartSpeed:1000
	});

	$(".search-item a").on("click", function(){
    	$(this).next().fadeToggle();
	});
		/*click catr*/
	$(".order-wrap .icon-wrap a").on("click", function(){
 	   $(".your-order").toggleClass("hidden");
 	});
 	
 	$(".order-wrap .dark-icon-wrap a").on("click", function(){
    	$(".your-order").toggleClass("hidden");
 	});
 		
 	$("#my-wish-list-2").on("mouseover", function(){
		$('.personal-info').css('display','none');
	    $('.basket-wrap').css('display','none');
	    $('.prod-wrap-wishlist').stop().fadeIn(500);
	});
	$("#my-wish-list-2").on("mouseout", function(){
	    $('.personal-info').stop().fadeOut(10);
	    $('.basket-wrap').stop().fadeOut(10);
	});


		/*hover cat-product*/
	$(".category-list .main-category ul li").on("mouseover", function(){
    	$(this).children().next().stop().fadeIn(500);
    });
    $(".category-list .main-category ul li").on("mouseout", function(){
   		$(this).children().next().stop().fadeOut(500);
	});
	/*hover pages menu*/
	$(".pages").on("mouseover", function(){
    	$(this).children().next().stop().fadeIn();
	});
	$(".pages").on("mouseout", function(){
    	$(this).children().next().stop().fadeOut();
	});
	/*hover product item*/
	$(".prod-wrap-item").on("mouseover", function(){
        $(this).children(".prod-wrap-item-hover").stop().fadeIn(500);
	});
	$(".prod-wrap-item").on("mouseout", function(){
        $(this).children(".prod-wrap-item-hover").stop().fadeOut(500);
	});
	var singleValues;
	var priceValues;
	var sum;
	var singleValues2;
	var priceValues2;
	var sum2;
	var val1;
	var val2;
	function displayVals() {
		var sum;
	var singleValues = $( "#select" ).on('input', function(){
		var singleValues = $( "#select" ).val();
		var priceValues = $( ".price-account" ).text();
		var sum = singleValues*priceValues;
		$( ".sum" ).html( singleValues*priceValues);
		var val1 = ($( ".sum" ).text())*1;
		});

	    var val1 = ($( ".sum" ).text())*1;
	var singleValues2 = $( "#select2" ).on('input', function(){
		var singleValues2 = $( "#select2" ).val();
		var priceValues2 = $( ".price-account2" ).text();
		var sum2 = singleValues2*priceValues2;
		$( ".sum2" ).html( singleValues2*priceValues2);
		var val2 = $( ".sum2" ).text();
	});
	    var val2 = ($( ".sum2" ).text())*1;
		var total_sum = val1+val2;
	   $('.total-wrap-basket h4 span').html(total_sum);
	   $('.prod-wrap-wishlist .goods-amount span').html(total_sum);
	   $('.popup-account h4 span').html(total_sum);
	}
	$("#select" ).change(displayVals);
	$("#select2" ).change(displayVals);
	displayVals();
	var p3 = $('.popup-over');
	$('.submit-basket').on("click", function(){
	    p3.css('display', 'block');
	    $('.icon-wrap').css('z-index','-1');
	    $('body').css('overflow-y', 'hidden');
	})
	p3.on("click", function(event) {
	    var e = event || window.event
	    if (e.target == this) {
	    	$('body').css('overflow-y', 'auto');
	        $(p3).css('display', 'none');
	        $('.icon-wrap').css('z-index','0');
	    }
	});
	$('.popup-close-account').on("click", function() {
	    $('body').css('overflow-y', 'auto');
		p3.css('display', 'none')
		$('.icon-wrap').css('z-index','0');
	});
	var p4 = $('.popup-one-click');
	$('.view-add').on("click", function(){
	    p4.css('display', 'block');
	    $('.icon-wrap').css('z-index','-1');
	    $('body').css('overflow-y', 'hidden');
	})
	p4.on("click", function(event) {
	    var e = event || window.event;
	    if (e.target == this) {
	    	$('body').css('overflow-y', 'auto');
	        $(p4).css('display', 'none');
	        $('.icon-wrap').css('z-index','0');
	    }
	})
	$('.popup-close-view').on("click", function() {
	    $('body').css('overflow-y', 'auto');
		p4.css('display', 'none')
		$('.icon-wrap').css('z-index','0');
	})
	$('.step-one').on("click", function() {
	    $('#step-one').addClass('hidden');
	    $('#step-two').removeClass('hidden');
	});
	$('.step-two').on("click", function() {
	    $('#step-two').addClass('hidden');
	    $('#step-three').removeClass('hidden');
	});
	$("#personal").on("mouseover", function(){
		$('.prod-wrap-wishlist').css('display','none');
	    $('.basket-wrap').css('display','none');
	    $('.personal-info').stop().fadeIn(500);
	});
	$("#personal").on("mouseout", function(){
	    $('.prod-wrap-wishlist').stop().fadeOut(10);
	    $('.basket-wrap').stop().fadeOut(10);
	});
	$("#personal-2").on("mouseover", function(){
		$('.prod-wrap-wishlist').css('display','none');
	    $('.basket-wrap').css('display','none');
	    $('.personal-info').stop().fadeIn(500);
	});
	$("#personal-2").on("mouseout", function(){
	    $('.prod-wrap-wishlist').stop().fadeOut(10);
	    $('.basket-wrap').stop().fadeOut(10);
	});
	$("#my-wish-list").on("mouseover", function(){
		$('.personal-info').css('display','none');
	    $('.basket-wrap').css('display','none');
	    $('.prod-wrap-wishlist').stop().fadeIn(500);
	});
	$("#my-wish-list").on("mouseout", function(){
	    $('.personal-info').stop().fadeOut(10);
	    $('.basket-wrap').stop().fadeOut(10);
	});
	$("#my-wish-list-2").on("mouseover", function(){
		$('.personal-info').css('display','none');
	    $('.basket-wrap').css('display','none');
	    $('.prod-wrap-wishlist').stop().fadeIn(500);
	});
	$("#my-wish-list-2").on("mouseout", function(){
	    $('.personal-info').stop().fadeOut(10);
	    $('.basket-wrap').stop().fadeOut(10);
	});
	$("#basket").on("mouseover", function(){
		$('.personal-info').css('display','none');
	    $('.prod-wrap-wishlist').css('display','none');
	    $('.basket-wrap').stop().fadeIn(500);
	});
	$("#basket").on("mouseout",function(){
	    $('.personal-info').stop().fadeOut(10);
	    $('.prod-wrap-wishlist').stop().fadeOut(10);
	});
	$("#basket-2").on("mouseover", function(){
		$('.personal-info').css('display','none');
	    $('.prod-wrap-wishlist').css('display','none');
	    $('.basket-wrap').stop().fadeIn(500);
	});
	    $("#basket-2").on("mouseout", function(){
	    $('.prod-wrap-wishlist').stop().fadeOut(10);
	    $('.personal-info').stop().fadeOut(10);
	});
	$(".toggle-list").on("click", function() {
			$(this).toggleClass("on");
			$(".hidden-list").slideToggle();
			return false;
		});
	/*burger-blog hover*/
	$(".class-page>a").on("click", function() {
		$(this).toggleClass("on");
		$(".class-page .burger-blog").slideToggle();
		return false;
	});
	/*FLEX-SLIDER*/
	  // The slider being synced must be initialized first
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 90,
		itemMargin: 5,
		asNavFor: '#slider'
	});
	 
	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	});
	  // Can also be used with $(document).ready()
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 170,
		itemMargin: 5,
		minItems: 2,
		maxItems: 5
	});
	  // Can also be used with $(document).ready()
	$('.flexslider').flexslider({
	    animation: "slide",
	    controlNav: "thumbnails"
	});
    $( "#slider-range" ).slider({
	    range: true,
	    min: 0,
	    max: 800,
	    values: [ 150, 450 ],
      	slide: function( event, ui ) {
        	$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      	}
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

})

$(function () {
	var s = 0.1;
	$(window).scroll(function(){
		if ($(window).scrollTop()>100){
			$('.totop').stop().fadeIn(300);
	  	}
		else{
			$('.totop').stop().fadeOut(300);
		}
	});
	$('.totop').on("click", function(){
		$('body, html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
})
	

        
		


