// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeToggle = document.querySelector('#toggle');
const content = document.querySelector('.content');
let theme = localStorage.getItem('theme');
let storage;

themeToggle.addEventListener('click', function () {
  console.log("toggle clicked");
  // starts light theme, first click should change to dark
  if (theme !== 'dark') {
    theme = 'dark';
    content.setAttribute('class', 'dark');
    themeToggle.textContent = '🌙';
    document.documentElement.style.setProperty('--circle-color', '#940e0a');
  }
  // If mode is light, apply dark background
  else {
    theme = 'light';
    content.setAttribute('class', 'light');
    themeToggle.textContent = '☀️';
    document.documentElement.style.setProperty('--circle-color', '#ffb100');
  }  
  
  localStorage.setItem('theme', theme);
  console.log(theme)

});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function() {
  if (!localStorage.getItem('post')) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('post'));
    }
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (data) {
  let storage = readLocalStorage();
  storage.push(data);
  localStorage.setItem('post', JSON.stringify(storage));
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

