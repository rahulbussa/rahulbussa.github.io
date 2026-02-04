const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__link");

if(navToggle && navMenu) {
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.toggle("is-open");
    })
}

navLinks.forEach((link) => {
    link.addEventListener("click", ()=> {
        navMenu.classList.remove('is-open');
    })
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
},
{
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section[id]");

const navMap = new Map();

navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if(href && href.startsWith("#")) {
        navMap.set(href.slice(1), link);
    }
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        const link = navMap.get(entry.target.id);
        if(link && entry.isIntersecting) {
            navLinks.forEach((item)=> item.classList.remove("active"));
            link.classList.add("active");
        }
    })
},
{ threshold: 0.4}
);

sections.forEach(section => sectionObserver.observe(section));

const planet = document.querySelector(".planet");
const heroVisual = document.querySelector(".hero__visual");

if(planet && heroVisual) {
    const updateRotation = (event) => {
        const rect = heroVisual.getBoundingClientRect();
        const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
        const yRatio = (event.clientY - rect.top) / rect.height - 0.5;

        planet.style.setProperty("--spin-x", `${xRatio * 80}px`);
        planet.style.setProperty("--light-x", `${50 + xRatio * 30}%`);
        planet.style.setProperty("--light-y", `${40 + yRatio * 25}%`);
    }

    const resetRotation = () => {
        planet.style.setProperty("--spin-x", "0px");
        planet.style.setProperty("--light-x", "35%");
        planet.style.setProperty("--light-y","35%");
    };

    heroVisual.addEventListener("mousemove", updateRotation);
    heroVisual.addEventListener("mouseleave", resetRotation);
    heroVisual.addEventListener("touchmove", (event)=> {
        if(event.touches.length > 0) {
            updateRotation(event.touches[0]);
        }
    });
    heroVisual.addEventListener("touchend", resetRotation);
}