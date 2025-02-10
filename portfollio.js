// Toggle Button
function toggleMenu() {
    document.querySelector(".navvar").classList.toggle("show");
}

// Button Responses
document.addEventListener("DOMContentLoaded", function() {
    const knowMoreButton = document.getElementById("know_more");
    const aboutSection = document.getElementById("about");

    knowMoreButton.addEventListener("click", function() {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.getElementById("skills_button");
  const skillSection = document.getElementById("skills");

  skill_Button.addEventListener("click", function() {
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const about_Button = document.querySelector("[name='about_button']");
  const aboutSection = document.getElementById("about");

  about_Button.addEventListener("click", function() {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.querySelector("[name='skill_button']");
  const skillSection = document.getElementById("skills");

  skill_Button.addEventListener("click", function() {
      event.preventDefault();
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.querySelector("[name='project_button']");
  const skillSection = document.getElementById("project");

  skill_Button.addEventListener("click", function() {
      event.preventDefault();
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skill_Button = document.querySelector("[name='achievement_button']");
  const skillSection = document.getElementById("certifications");

  skill_Button.addEventListener("click", function() {
      event.preventDefault();
      skillSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const skill_Button = document.querySelector("[name='contact_button']");
    const skillSection = document.getElementById("contact");
  
    skill_Button.addEventListener("click", function() {
        event.preventDefault();
        skillSection.scrollIntoView({ behavior: "smooth" });
    });
  });

// About Section Effect
document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        var aboutSection = document.getElementById("about");
        var position = aboutSection.getBoundingClientRect().top;
        var screenHeight = window.innerHeight / 1.3;

        if (position < screenHeight) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load in case it's already visible
});

// Work Experience & intern Section
document.addEventListener("DOMContentLoaded", function() {
  const internSection = document.querySelector(".intern_list");

  function checkVisibility() {
      const rect = internSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) { // Triggers before full visibility
          internSection.classList.add("visible");
          window.removeEventListener("scroll", checkVisibility); // Runs only once
      }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Check on page load
});

// Project section
document.addEventListener("DOMContentLoaded", function() {
  const projectSection = document.querySelector(".project_container");
  const projectItems = document.querySelectorAll(".achievement_box");

  function checkVisibility() {
      const rect = projectSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) { 
          projectSection.classList.add("visible");

          // Animate each project with a delay
          projectItems.forEach((item, index) => {
              setTimeout(() => {
                  item.classList.add("visible");
              }, index * 150); // 150ms delay for each
          });

          window.removeEventListener("scroll", checkVisibility); // Run only once
      }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Check on page load
});

// My Project
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".achievement_box");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to check already visible elements
});


// Courses & Certifications
document.addEventListener("DOMContentLoaded", function () {
  const certificationCards = document.querySelectorAll(".certification-card");

  function showCardsOnScroll() {
      certificationCards.forEach((card, index) => {
          const cardPosition = card.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (cardPosition < windowHeight - 50) {
              setTimeout(() => {
                  card.classList.add("show");
              }, index * 200); // Staggered effect
          }
      });
  }

  window.addEventListener("scroll", showCardsOnScroll);
  showCardsOnScroll(); // Run on load in case already in view
});

// contact section
function sendEmail(event) {
    event.preventDefault(); // Prevent form reload

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validate contact number (must be exactly 10 digits and numeric)
    let contactPattern = /^\d{10}$/; // Ensures exactly 10 digits
    if (!contactPattern.test(contact)) {
        alert("❌ Please enter a valid 10-digit contact number.");
        return;
    }

    // Validate email format (ensures a proper domain with at least 2 letters)
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("❌ Please enter a valid email address.");
        return;
    }

    // Sending email with email.js
    emailjs.send("service_q7dfwzl", "template_tknvv4o", {
        from_name: name,
        reply_to: email,
        contact_number: contact,
        message: message
    }).then(
        function (response) {
            alert("✅ Message sent successfully!");
            console.log("Success:", response);
            document.querySelector("form").reset(); // Clear the form after sending
        },
        function (error) {
            alert("❌ Failed to send message. Please try again.");
            console.error("Error:", error);
        }
    );
}

// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("zPswmdw78l4yjvTMu"); 
});
