// script.js

document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    // --- Preloader ---
    const preloader = document.getElementById('preloader');
    const animateHeroAndSideElements = () => {
        // Hero Section Animation
        gsap.timeline()
            .from('.hero-intro', { autoAlpha: 0, y: 20, duration: 0.5, delay: 0.2 })
            .from('.hero-heading', { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.2")
            .from('.hero-subheading', { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.3")
            .from('.hero-desc', { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.3")
            .from('.main-btn', { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.3");
        
        // Side Elements Animation
        gsap.from('#social-links-container a', {
            autoAlpha: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            delay: 1
        });
    };

    gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: 'power2.inOut',
        onComplete: () => {
            preloader.style.display = 'none';
            animateHeroAndSideElements();
        }
    });


    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    } else {
        document.body.classList.remove('dark');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });


    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'scrolled', target: header }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    };

    mobileMenuButton.addEventListener('click', toggleMenu);
    mobileNavLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // --- General Scroll-Triggered Animations ---
    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
        const elems = section.querySelectorAll('.section-title, p, ul, .experience-container, .grid, h3, form');
        gsap.from(elems, {
            y: 50,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
            }
        });
    });

    // --- Dynamic Data Injection ---
    const experiences = [
        { role: "AI Developer", company: "Personal Project", date: "Oct 2024 - Jan 2025", tasks: ["Engineered a computer vision-based attendance system using OpenCV and the FaceNet framework.", "Designed a secure database to store attendance records with a user-friendly interface."] },
        { role: "AI/ML Intern", company: "Cognitxyz Technology", date: "Sep 2024", tasks: ["Developed and optimized machine learning models for real-world challenges.", "Focused on data interaction strategies to enhance model accuracy."] },
        { role: "AI/ML Intern", company: "Hoping Minds", date: "Jun 2024 - Jul 2025", tasks: ["Applied foundational machine learning principles in end-to-end tasks.", "Gained experience from data handling and analysis to model training and prediction."] }
    ];

    const projects = [
        { title: "Doctor Bot", desc: "A conversational bot using RAG with LangChain and HuggingFace LLMs, deployed via Streamlit for context-aware medical responses.", tags: ["LangChain", "Streamlit", "HuggingFace"], github: "https://github.com/sahil-devhub/Doctor-Bot.git", live: null },
        { title: "AI-ttendance System", desc: "A real-time, AI-powered attendance system using FaceNet and OpenCV for facial recognition, with a Streamlit interface.", tags: ["OpenCV", "FaceNet", "Streamlit"], github: "https://github.com/sahil-devhub/Al-ttendance-System.git", live: null },
        { title: "IronVision-The Game", desc: "A motion-controlled game that translates physical movements into on-screen actions using MediaPipe and OpenCV.", tags: ["MediaPipe", "OpenCV", "PyAutoGUI"], github: "https://github.com/sahil-devhub/IronVision-The-Game.git", live: null },
        { title: "JARVIS", desc: "A multi-modal virtual assistant with a Streamlit interface, using Gemini 1.5 Pro to automate a wide range of tasks.", tags: ["Gemini 1.5 Pro", "Streamlit"], github: "https://github.com/sahil-devhub/Jarvis-Al.git", live: null },
        { title: "Lung Cancer Predictor", desc: "A machine learning model to predict lung cancer risk, with a Streamlit front-end for clinically-relevant risk assessments.", tags: ["Scikit-learn", "Streamlit"], github: "https://github.com/sahil-devhub/Lung-risk-alert-system.git", live: "https://lung-risk-alert-system.streamlit.app/" }
    ];
    
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/sahil-devhub", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>` },
        { name: "LinkedIn", url: "#", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>` }
    ];

    // Populate Experiences
    const expContainer = document.querySelector('.experience-container');
    expContainer.innerHTML = experiences.map(exp => `
        <div class="experience-card">
            <h3 class="text-xl font-bold text-text-heading">${exp.role} <span class="text-accent">@ ${exp.company}</span></h3>
            <p class="font-inter text-sm text-text-secondary mb-4">${exp.date}</p>
            <ul class="space-y-2">
                ${exp.tasks.map(task => `<li class="text-text-primary">${task}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Populate Projects
    const projContainer = document.querySelector('#projects .grid');
    projContainer.innerHTML = projects.map(proj => `
        <a href="${proj.live || proj.github}" target="_blank" class="project-card block">
            <div class="p-6 flex-grow flex flex-col">
                <header class="flex justify-between items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    <div class="flex space-x-2 text-text-secondary">
                        <span class="text-xs">${proj.tags.join(' / ')}</span>
                    </div>
                </header>
                <h3 class="text-xl font-bold text-text-heading mb-2">${proj.title}</h3>
                <p class="text-text-primary text-sm flex-grow">${proj.desc}</p>
            </div>
        </a>
    `).join('');

    // Populate Social Links
    const socialContainerDesktop = document.getElementById('social-links-container');
    const socialContainerMobile = document.querySelector('footer .flex');
    socialContainerDesktop.innerHTML = socialLinks.map(link => `<a href="${link.url}" target="_blank" class="social-link p-2">${link.icon}</a>`).join('');
    socialContainerMobile.innerHTML = socialLinks.map(link => `<a href="${link.url}" target="_blank" class="social-link p-2">${link.icon}</a>`).join('');

    // --- Contact Form Handling ---
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        formStatus.textContent = 'Sending...';
        formStatus.className = 'text-text-secondary';

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.textContent = "Thanks for your message! I'll be in touch soon.";
                formStatus.className = 'success';
                form.reset();
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    formStatus.textContent = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.textContent = "Oops! There was a problem submitting your form.";
                }
                formStatus.className = 'error';
            }
        } catch (error) {
            formStatus.textContent = "Oops! There was a problem submitting your form.";
            formStatus.className = 'error';
        }
    }
    form.addEventListener("submit", handleSubmit);
});
