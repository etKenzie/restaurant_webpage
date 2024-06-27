
export default function buttonSetup(navButton) {
    const buttons_nav = document.querySelectorAll('.button-nav');
    buttons_nav.forEach(button => {
        button.classList.remove('active-button');
    })

    navButton.classList.add('active-button');

}