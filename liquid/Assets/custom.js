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