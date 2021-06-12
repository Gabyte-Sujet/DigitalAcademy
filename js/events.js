$(function(){

	$('.owl-review').owlCarousel({
	    margin: 46,
	    nav: true,
	    items: 2,
	    navText: [
	    	"<div class='prev'><img src='img/left-arrow.svg'></div>",
	    	"<div class='next'><img src='img/right-arrow.svg'></div>"
	    ],
	    responsive:{
	        0:{
	           items: 1 
	        },
	        767:{
	           items: 2 
	        },
	        1000:{
	            
	        }
	    }
	});

	$('.owl-trainers').owlCarousel({
	    margin: 22,
	    nav: true,
	    items: 4,
	    navText: [
	    	"<div class='prev'><img src='img/left-arrow.svg'></div>",
	    	"<div class='next'><img src='img/right-arrow.svg'></div>"
	    ],
	    responsive:{
	        0:{
	            items: 1
	        },
	        576:{
	            items: 2
	        },
	        767:{ 
	            items: 3
	        },
	        991:{
	            items: 4
	        },
	       
	    }
	});

});