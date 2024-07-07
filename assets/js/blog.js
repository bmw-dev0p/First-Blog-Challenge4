// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backBtn = document.querySelector('#back')
const article = document.createElement('article');
const h2 = document.createElement('h2');
const block = document.createElement('blockquote');
const p = document.createElement('p');
const userStorage = JSON.parse(localStorage.getItem('username'));
const titleStorage = JSON.parse(localStorage.getItem('title'));
const contentStorage = JSON.parse(localStorage.getItem('content'));
//check
console.log(userStorage);
console.log(userStorage.length);

// TODO: Create a function that builds an element and appends it to the DOM

function createBlog(){
    
    for (let i = 0; i < userStorage.length; i++){
        
        main.appendChild(article);
        article.appendChild(h2);
        article.appendChild(block);
        article.appendChild(p);

        h2.textContent = titleStorage[i];
        block.textContent = contentStorage[i];
        p.textContent = `By: ${userStorage[i]}`;

    }

    


}




// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts(){
    console.log('noPosts activated')
    window.alert('Hey! There are no user submitted posts to display (besides example). Please use the back button (top right window), and create a post.');
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(){
    
    // users.push(userCurrent);
    // const titleCurrent = localStorage.getItem('title'); 
    // titles.push(titleCurrent);
    // const contentCurrent = localStorage.getItem('content');
    // contents.push(contentCurrent);

    if (userStorage === null){
        noPosts();
    } else {
        createBlog();
    
        }
    }

// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage('./index.html');
    });