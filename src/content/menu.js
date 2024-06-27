import buttonSetup from "./setup";

import duck2 from "../input/duck2.jpg";
import jiao from "../input/jiaozi.png";
import xlb from "../input/xlb.jpg";
import hp from "../input/hp.jpg";
import cm from "../input/cm.jpg";
import fr from "../input/fr.jpg";


const contentMenu = () => {
    const button = document.getElementById('button-menu')
    buttonSetup(button);

    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuSectionContainer = document.createElement('div');
    menuSectionContainer.classList.add('menu-section-container');

    // Menu Description Section

    const menuDesc = document.createElement('div');
    menuDesc.classList.add('menu-desc');
    
    const title = document.createElement('div');
    title.classList.add('menu-title');
    title.textContent = 'Signature Dishes';

    const secondaryTitle = document.createElement('div');
    secondaryTitle.classList.add('menu-secondary-title');
    secondaryTitle.textContent = 'Confused what to write here but it is descriptive';

    const description = document.createElement('div');
    description.classList.add('menu-description');
    description.textContent = 'Ducks taste Good, Bebek enak dimakan, 鸭肉是最好吃的, I also like dimsum, Aku juga suka dimsum, 我也喜欢饺子, Once again random things, sekali lagi tulis ngawur, 再一次写的很不清楚。';


    menuDesc.appendChild(title);
    menuDesc.appendChild(secondaryTitle);
    menuDesc.appendChild(description);

    menuSectionContainer.appendChild(menuDesc);


    // Menu Items Section
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Collection of food photos
    let foodItems = [duck2, xlb, jiao, hp, cm, fr];

    foodItems.forEach(foodItem => {
        const foodContainer = document.createElement('div');
        foodContainer.classList.add('food-item');

        const foodImage = document.createElement('img');
        foodImage.classList.add('food-image');
        foodImage.src = foodItem;

        const foodInformation = document.createElement('div');
        foodInformation.classList.add('food-information');

        const foodName = document.createElement('div');
        foodName.classList.add('food-name');
        foodName.textContent = 'Food Name';

        const foodDescription = document.createElement('div');
        foodDescription.classList.add('food-description');
        foodDescription.textContent = 'These are some random words that may or may not maybe in some instance have some meaning';

        foodInformation.appendChild(foodName);
        foodInformation.appendChild(foodDescription);

        foodContainer.appendChild(foodImage);
        foodContainer.appendChild(foodInformation);

        menuContainer.appendChild(foodContainer);

    });

    menuSectionContainer.appendChild(menuContainer);

    content.appendChild(menuSectionContainer);





}

export default contentMenu;