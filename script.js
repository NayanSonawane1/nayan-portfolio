document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message Sent!');
    });

    
    // Typing Animation in Header
    const text = "Aspiring Front-End Developer | Passionate About React.js | Eager to Contribute & Learn";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
});

// Animate Skill Progress Bars on Scroll
window.addEventListener("scroll", function () {
    let skills = document.querySelectorAll(".progress");
    let section = document.getElementById("about");
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let screenPosition = window.innerHeight / 1.2;

    if (window.scrollY >= sectionTop - screenPosition) {
        skills.forEach(skill => {
            skill.style.width = skill.classList.contains("html") ? "90%" :
                                skill.classList.contains("css") ? "85%" :
                                skill.classList.contains("js") ? "75%" :
                                skill.classList.contains("react") ? "80%" : "0%";
        });
    }
});

// Show Scroll-to-Top Button
window.addEventListener("scroll", function () {
    let scrollTopBtn = document.getElementById("scroll-top");
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Scroll to Top When Clicked
document.getElementById("scroll-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamic Blog Post Data
const blogPosts = [
    { title: "How I Built My Portfolio", date: "March 3, 2025", content: "A detailed guide on how I built my personal website." },
    { title: "Why React is Amazing", date: "February 20, 2025", content: "A deep dive into why React is my favorite JavaScript library." }
];

// Display Blog Posts
const blogContainer = document.getElementById("blog-container");
blogPosts.forEach(post => {
    let postDiv = document.createElement("div");
    postDiv.classList.add("blog-post");
    postDiv.innerHTML = `<h3>${post.title}</h3><p><strong>${post.date}</strong></p><p>${post.content}</p>`;
    blogContainer.appendChild(postDiv);
});

AOS.init();

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

