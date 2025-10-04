const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            }
        });

        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});

const curriculumItems = document.querySelectorAll('.curriculum-item');

curriculumItems.forEach(item => {
    const question = item.querySelector('h4');
    const description = item.querySelector('.curriculum-description');

    item.addEventListener('click', () => {
        curriculumItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.curriculum-description').style.maxHeight = null;
            }
        });

        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            description.style.maxHeight = description.scrollHeight + 'px';
        } else {
            description.style.maxHeight = null;
        }
    });
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("active");
    } else {
        backToTopBtn.classList.remove("active");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
