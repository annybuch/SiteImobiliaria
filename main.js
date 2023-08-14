const overlay = document.getElementById('overlay');
const menuLateral = document.getElementById('menuLateral');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    menuLateral.style.left = (menuLateral.style.left === '0px') ? '-250px' : '0px';
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
});



// Perguntas frequentes (expandir/contrair respostas)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    const answer = question.querySelector('.faq-answer');
    question.addEventListener('click', () => {
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});