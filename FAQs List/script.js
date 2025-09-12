// FAQ array about being a frontend developer
    const faqs = [
      { question: "What is frontend development?", answer: "Frontend development is creating the visual part of websites using HTML, CSS, and JavaScript." },
      { question: "Which languages do I use?", answer: "I use HTML, CSS, and JavaScript to build web pages and projects." },
      { question: "How do I practice?", answer: "I build small projects, use array methods, loops, and functions to apply my knowledge." },
      { question: "What is my goal as a developer?", answer: "My goal is to become a professional frontend developer and start freelancing." },
      { question: "Why JavaScript?", answer: "JavaScript makes web pages interactive, allowing me to create dynamic user experiences." }
    ];

    const faqContainer = document.getElementById("faqContainer");

    // Create FAQ items
    faqs.map(faq => {
      const item = document.createElement("div");
      item.classList.add("faq-item");
      item.innerHTML = `
        <h3 class="question">${faq.question}</h3>
        <p class="answer">${faq.answer}</p>
      `;
      faqContainer.appendChild(item);
    });

    // Toggle answers
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const question = item.querySelector(".question");
      question.addEventListener("click", () => {
        item.classList.toggle("active");
        const answer = item.querySelector(".answer");
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
    });