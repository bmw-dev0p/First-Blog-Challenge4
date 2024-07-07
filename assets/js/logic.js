// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeToggle = document.querySelector('#toggle');
const content = document.querySelector('.content');
// const main = document.querySelector('main');
// const foot = document.querySelector('footer');

let theme = localStorage.getItem('theme');

themeToggle.addEventListener('click', function () {
  console.log("toggle clicked");
  // console.log(content);

  if (theme !== 'dark') {
    theme = 'dark';
    content.setAttribute('class', 'dark');
    // main.setAttribute('class', 'light');
    // foot.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    theme = 'light';
    content.setAttribute('class', 'light');
    // head.setAttribute('class', 'dark');
    // head.setAttribute('class', 'dark');
  }  
  
  localStorage.setItem('theme', theme);
  console.log(theme)

});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

