import buttonSetup from "./setup";

import duck from "../input/duck.jpg";

import contentMenu from './menu';

const contentHome = () => {
    const content = document.getElementById("content");
    content.innerHTML = '';
    const button = document.getElementById('button-home')
    buttonSetup(button);

    // Main Image Setup
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    const mainImg = document.createElement('img');
    mainImg.src = duck;

    // Create a new div for the overlay
    const overlayDiv = document.createElement('div');
    overlayDiv.className = 'overlay';

    // Create a text node for the overlay text
    const overlayInfo = document.createElement('div');
    overlayInfo.textContent = 'All Ducks Welcome';
    overlayInfo.classList.add('overlay-info');

    const overlayButtons = document.createElement('div');
    overlayButtons.classList.add('overlay-buttons');

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Now';
    orderButton.classList.add('image-button');

    const menuButton = document.createElement('button');
    menuButton.textContent = 'View Menu';
    menuButton.classList.add('image-button');

    menuButton.addEventListener('click', contentMenu);

    // overlayInfo.appendChild(overlayText);
    overlayButtons.appendChild(orderButton);
    overlayButtons.appendChild(menuButton);
    overlayInfo.appendChild(overlayButtons);

    // Append the text node to the overlay div
    overlayDiv.appendChild(overlayInfo);

  // Append the image and overlay to the new div

    imgContainer.appendChild(mainImg);
    imgContainer.appendChild(overlayDiv);

    content.appendChild(imgContainer);




}

export default contentHome;