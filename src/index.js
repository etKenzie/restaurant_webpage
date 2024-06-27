import './main.css';
import contentAbout from './content/about';
import contentHome from './content/home';
import contentMenu from './content/menu';

console.log("STARTING UP!!!")

function buttonSetup(buttonName, buttonFunction) {
    const navButton = document.getElementById(buttonName);
    navButton.addEventListener('click', buttonFunction);
}

// contentHome();
contentMenu();
buttonSetup("button-about", contentAbout);
buttonSetup("button-home", contentHome);
buttonSetup("button-menu", contentMenu);

