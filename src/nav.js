
        window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
    