const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

/* remove menu mobile */
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLinks.forEach(nav => nav.addEventListener('click', linkAction));

const skillContent = document.getElementsByClassName('skills__content');
const skillHeaders = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(let i=0; i< skillContent.length; i++) {
        skillContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillHeaders.forEach((header) => {
    header.addEventListener('click', toggleSkills);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset
    if(sections){
        sections.forEach(current =>{
            const sectionHeight = current?.offsetHeight
            const sectionTop = current?.offsetTop - 50;
            sectionId = current?.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link')
            }
        });
    }
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) {
        scrollTop?.classList.add('show-scroll'); 
    }
    else {
        scrollTop?.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollTop);





const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img, .home__social,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})