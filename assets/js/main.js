const burgerMenu = document.querySelector('.burger');
const navLink = document.querySelector('ul');

burgerMenu.addEventListener('click', mobileMenuStart);

function mobileMenuStart (e) {
    // burgerMenu.classList.remove;
    navLink.style.display = "flex";
    const newUl =  document.createElement('li');
    newUl.innerText = "X";
    newUl.style.position = "absolute";
    newUl.style.top = "0";
    newUl.style.right = "0";
    newUl.style.fontSize = "36px";
    newUl.style.margin = "2.2rem";
    navLink.appendChild(newUl);
    newUl.addEventListener('click', close);
}

