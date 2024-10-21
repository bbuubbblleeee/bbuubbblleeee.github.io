function reveal() {
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        var windowHeight = window.innerHeight;
        var sectionTop = sections[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            sections[i].classList.add('show');
        } else {
            sections[i].classList.remove('show');
        }
    }
}

window.addEventListener('scroll', reveal);
