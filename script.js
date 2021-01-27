const toggleSwitch = document.querySelector('input[type="checkbox"]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const img0 = document.getElementById('img0');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

// dark mode function
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    img0.src = 'img/Blog_dark.svg';
    img1.src = 'img/secrets_dark.svg';
    img2.src = 'img/rest_dark.svg';
    img3.src = 'img/Journal_dark.svg';
    img4.src = 'img/newsletter_dark.svg';
    img5.src = 'img/todo_dark.svg';
}

// dark mode function
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    img0.src = 'img/Blog_light.svg';
    img1.src = 'img/secrets_light.svg';
    img2.src = 'img/rest_light.svg';
    img3.src = 'img/Journal_light.svg';
    img4.src = 'img/newsletter_light.svg';
    img5.src = 'img/todo_light.svg';
}

function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}