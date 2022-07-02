const navbar = document.querySelector('.navbar');
const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', function(){
    if (scrollY > 0) {
        navbar.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    if (scrollY > 500) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0 });
});