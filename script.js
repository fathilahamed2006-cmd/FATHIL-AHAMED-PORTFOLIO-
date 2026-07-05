/*==========================================================
    PORTFOLIO JAVASCRIPT
    Developed by: Fathil Ahamed
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
        ELEMENTS
    ==================================================*/

    const body = document.body;

    const loader = document.getElementById("loader");

    const themeToggle = document.getElementById("themeToggle");

    const navLinks = document.querySelectorAll(".nav-links a");

    const hamburger = document.querySelector(".hamburger");

    const navMenu = document.querySelector(".nav-links");

    const header = document.querySelector("header");

    const typingElement = document.querySelector(".typing");

    const progressBar = document.getElementById("progress-bar");

    const backToTop = document.getElementById("backToTop");



    /*==================================================
        LOADER
    ==================================================*/

    window.addEventListener("load", () => {

        if (!loader) return;

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.remove();
        }, 700);

    });



    /*==================================================
        THEME TOGGLE
    ==================================================*/

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light");

        if (themeToggle)
            themeToggle.innerHTML = "☀️";

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            body.classList.toggle("light");

            if (body.classList.contains("light")) {

                localStorage.setItem("theme", "light");

                themeToggle.innerHTML = "☀️";

            }

            else {

                localStorage.setItem("theme", "dark");

                themeToggle.innerHTML = "🌙";

            }

        });

    }



    /*==================================================
        MOBILE MENU
    ==================================================*/

    if (hamburger) {

        hamburger.addEventListener("click", () => {

            hamburger.classList.toggle("active");

            navMenu.classList.toggle("active");

        });

    }



    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navMenu)
                navMenu.classList.remove("active");

            if (hamburger)
                hamburger.classList.remove("active");

        });

    });



    /*==================================================
        STICKY HEADER
    ==================================================*/

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("sticky");

        }

        else {

            header.classList.remove("sticky");

        }

    });



    /*==================================================
        SMOOTH SCROLL
    ==================================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetID = this.getAttribute("href");

            if (!targetID.startsWith("#")) return;

            e.preventDefault();

            const target = document.querySelector(targetID);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });
    /*==================================================
        TYPING EFFECT
    ==================================================*/

    const words = [
        "UI/UX Designer",
        "Frontend Developer",
        "Software Developer",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typingEffect() {

        if (!typingElement) return;

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typingEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(typingEffect, deleting ? 60 : 120);

    }

    typingEffect();



    /*==================================================
        ACTIVE NAVIGATION
    ==================================================*/

    const sections = document.querySelectorAll("section[id]");

    function activeMenu() {

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 120;

            const sectionId = section.getAttribute("id");

            const navLink = document.querySelector(
                '.nav-links a[href="#' + sectionId + '"]'
            );

            if (!navLink) return;

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {

                navLink.classList.add("active");

            } else {

                navLink.classList.remove("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);



    /*==================================================
        SCROLL PROGRESS BAR
    ==================================================*/

    function updateProgressBar() {

        if (!progressBar) return;

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    }

    window.addEventListener("scroll", updateProgressBar);



    /*==================================================
        REVEAL ANIMATION
    ==================================================*/

    const revealItems = document.querySelectorAll(

        ".section," +
        ".project-card," +
        ".skill-card," +
        ".certificate-card," +
        ".achievement-card," +
        ".education-card," +
        ".internship-card"

    );

    function revealOnScroll() {

        const trigger =
            window.innerHeight - 120;

        revealItems.forEach(item => {

            const top =
                item.getBoundingClientRect().top;

            if (top < trigger) {

                item.style.opacity = "1";

                item.style.transform =
                    "translateY(0)";

                item.style.transition =
                    "all .8s ease";

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();
        /*==================================================
        COUNTER ANIMATION
    ==================================================*/

    const counters = document.querySelectorAll(".counter");

    function startCounter(counter) {

        const target = parseInt(
            counter.getAttribute("data-target")
        );

        let count = 0;

        const speed = Math.ceil(target / 100);

        const update = () => {

            count += speed;

            if (count >= target) {

                counter.textContent = target + "+";

                return;

            }

            counter.textContent = count + "+";

            requestAnimationFrame(update);

        };

        update();

    }

    const counterObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter(entry.target);

                    counterObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });



    /*==================================================
        BACK TO TOP BUTTON
    ==================================================*/

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /*==================================================
        PROJECT CARD HOVER EFFECT
    ==================================================*/

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);

        });

    });



    /*==================================================
        CONTACT FORM VALIDATION
    ==================================================*/

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const inputs =
                contactForm.querySelectorAll(
                    "input[required], textarea[required]"
                );

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    valid = false;

                    input.style.borderColor = "#ef4444";

                } else {

                    input.style.borderColor = "";

                }

            });

            if (!valid) {

                alert("Please fill in all required fields.");

                return;

            }

            alert("Thank you! Your message has been sent.");

            contactForm.reset();

        });

    }



    /*==================================================
        IMAGE PARALLAX
    ==================================================*/

    const profileImage = document.querySelector(".profile-card img");

    if (profileImage) {

        window.addEventListener("mousemove", (e) => {

            const x =
                (window.innerWidth / 2 - e.clientX) / 50;

            const y =
                (window.innerHeight / 2 - e.clientY) / 50;

            profileImage.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }
        /*==================================================
        FLOATING ANIMATION
    ==================================================*/

    const floatingCards = document.querySelectorAll(

        ".skill-card, .project-card, .certificate-card"

    );

    floatingCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = "0.4s ease";

            card.style.transform = "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });



    /*==================================================
        LAZY LOADING IMAGES
    ==================================================*/

    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const img = entry.target;

                    img.src = img.dataset.src;

                    img.removeAttribute("data-src");

                    imageObserver.unobserve(img);

                }

            });

        },

        {

            rootMargin: "100px"

        }

    );

    images.forEach(img => {

        imageObserver.observe(img);

    });



    /*==================================================
        CURSOR GLOW EFFECT
    ==================================================*/

    const cursor = document.querySelector(".cursor-glow");

    if (cursor) {

        document.addEventListener("mousemove", (e) => {

            cursor.style.left = e.clientX + "px";

            cursor.style.top = e.clientY + "px";

        });

    }



    /*==================================================
        SCROLL REVEAL FOR TITLES
    ==================================================*/

    const titles = document.querySelectorAll(".section-title");

    const titleObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-title");

                }

            });

        },

        {

            threshold: 0.3

        }

    );

    titles.forEach(title => {

        titleObserver.observe(title);

    });



    /*==================================================
        CURRENT YEAR
    ==================================================*/

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }



    /*==================================================
        DISABLE RIGHT CLICK (OPTIONAL)
    ==================================================*/

    /*
    document.addEventListener("contextmenu", function(e){

        e.preventDefault();

    });
    */



    /*==================================================
        DISABLE F12 (OPTIONAL)
    ==================================================*/

    /*
    document.addEventListener("keydown", function(e){

        if(e.key === "F12"){

            e.preventDefault();

        }

    });
    */



    /*==================================================
        CONSOLE MESSAGE
    ==================================================*/

    console.log("%cWelcome to Fathil Ahamed's Portfolio",

        "color:#3b82f6;font-size:18px;font-weight:bold;");

    console.log("%cDesigned & Developed with ❤️",

        "color:#7c3aed;font-size:14px;");



}); // END DOMContentLoaded