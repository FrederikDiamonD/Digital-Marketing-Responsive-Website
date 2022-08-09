// Execute script after page load
window.onload = function digital_fn() {
    // Toggle button
    let toggle = document.querySelector('#nav .toggle-btn');
    let collapse = document.querySelector('#nav .collapse');

    toggle.addEventListener('click', function(event) {
        collapse.classList.toggle('active')
    });

    // Masonry JS
    let grid = document.querySelector('#site-main .recent-work-area .images-flex');
    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true
    })
}

// Rellax JS code
var rellax = new Rellax('.rellax', {
    center: true
})