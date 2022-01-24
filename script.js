// Set background for body with a random image from Unsplash
fetch("https://source.unsplash.com/random/1920x1080/?wallpaper")
	.then(response => {
		const body = document.getElementsByTagName("body")[0];
		body.style.backgroundImage = `url("${response.url}")`;
	});

// Initialize bootstrap 5 tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})