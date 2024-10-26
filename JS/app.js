$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.dots'
    });
});



const triggers = document.querySelectorAll('.menu');
console.log(triggers);

for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('is-open');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simulate a login process (you can add actual login logic here)
        console.log("Logging in...");

        // Delay redirect to index.html
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 5000); // 5000 milliseconds = 5 seconds
    });
});


