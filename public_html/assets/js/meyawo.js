$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});











       document.addEventListener("DOMContentLoaded", function() {
            const aboutSection = document.getElementById("about");

            if (aboutSection) {
                window.addEventListener("scroll", function() {
                    const rect = aboutSection.getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        aboutSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                });
            }
        });