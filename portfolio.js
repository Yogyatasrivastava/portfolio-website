// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        menuBtn.classList.toggle("ri-menu-3-line");
        menuBtn.classList.toggle("ri-close-line");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.classList.remove("ri-close-line");
        menuBtn.classList.add("ri-menu-3-line");

    });

});



// ==========================
// Typing Animation
// ==========================

const typing = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Java Programmer",
    "Python Learner",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 110);

}

typeEffect();



// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeBtn.classList.remove("ri-moon-line");
            themeBtn.classList.add("ri-sun-line");

        } else {

            themeBtn.classList.remove("ri-sun-line");
            themeBtn.classList.add("ri-moon-line");

        }

    });

}



// ==========================
// Scroll To Top
// ==========================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// ==========================
// Active Navbar
// ==========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



// ==========================
// Reveal Animation
// ==========================

const reveal = document.querySelectorAll(

".hero-left,.hero-right,.about-grid,.skill-card,.timeline-item,.project-card,.contact-wrapper"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold:.15

});

reveal.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = ".8s ease";

    observer.observe(item);

});



// ==========================
// Sticky Header Shadow
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow="none";

    }

});



// ==========================
// Floating Image
// ==========================

const image = document.querySelector(".image-card");

if(image){

let move = 1;

setInterval(()=>{

image.style.transform=`translateY(${move*8}px)`;

move *= -1;

},2000);

}



// ==========================
// Contact Form
// ==========================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

console.log("Portfolio Loaded Successfully 🚀");