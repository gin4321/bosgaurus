var oldURL = ""
var currentURL = window.location.href

function checkURLchange(currentURL){
	if(
		currentURL !== oldURL && 
		currentURL !== undefined &&
		currentURL.includes('/products/')
	){
		oldURL = currentURL
		location.reload()
	}

	oldURL = window.location.href;
	setInterval(function() {
		checkURLchange(window.location.href)
	}, 1000)
}

checkURLchange()

$(function() {
	$('.clear-cart').on('click',function(e){
	  e.preventDefault();
	  $.ajax({
		type: "POST",
		url: '/cart/clear.js',
		success: function(){
		  location.href = '/'
		},
		dataType: 'json'
	  });
	})
  });