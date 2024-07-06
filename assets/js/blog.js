// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backBtn = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
let users = [];
let titles = [];
let contents = [];

// console.log(users);

function createBlog(){

        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const block = document.createElement('blockquote');
        const p = document.createElement('p');

        document.body.appendChild(article);
        article.appendChild(h2);
        article.appendChild(block);
        article.appendChild(p);

        h2.textContent = localStorage.getItem('title');
        block.textContent = localStorage.getItem('content');
        p.textContent = `By: ${localStorage.getItem('username')}`;

    


}




// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts(){
    console.log('noPosts activated')
    window.alert('Hey! There are no user submitted posts to display (besides example). Please use the back button (top right window), and create a post.');
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(){
    const userCurrent = localStorage.getItem('username');
    users.push(userCurrent);
    const titleCurrent = localStorage.getItem('title'); 
    titles.push(titleCurrent);
    const contentCurrent = localStorage.getItem('content');
    contents.push(contentCurrent);

    if (userCurrent === null){
        noPosts();
    } else {
        for (let i = 0; i < users.length; i++){

            createBlog();
    
        }
    }
}
// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    redirectPage('./index.html');
    });