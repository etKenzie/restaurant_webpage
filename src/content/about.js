import buttonSetup from "./setup";


const contentAbout = () => {
    const content = document.getElementById("content");
    content.innerHTML = '';
    const button = document.getElementById('button-about')
    buttonSetup(button);

    // Menu Description Section

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add('about-container');

    const menuDesc = document.createElement('div');
    menuDesc.classList.add('menu-desc');
    
    const title = document.createElement('div');
    title.classList.add('menu-title');
    title.textContent = 'Contact Us';

    const secondaryTitle = document.createElement('div');
    secondaryTitle.classList.add('menu-secondary-title');
    secondaryTitle.textContent = 'Confused what to write here but it is descriptive';

    const description = document.createElement('div');
    description.classList.add('menu-description');

    description.textContent = 'Here is a long winded description of literally nothing. You might be wondering why this has words and honestly I also dont know. I am writing random things to fill up this space as a placeholder anyways. Letting my brain just continue writing without thinking much about what I am writing. Is it good probably not but it definitely is words I hope at least.';

    menuDesc.appendChild(title);
    menuDesc.appendChild(secondaryTitle);
    menuDesc.appendChild(description);

    aboutContainer.appendChild(menuDesc);

    content.appendChild(aboutContainer);
}

export default contentAbout;