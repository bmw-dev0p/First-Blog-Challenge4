// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backBtn = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
let users = [];
let titles = [];
let contents = [];

function createBlog(){

    for (let i = 0; i < users.length; i++){


        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const block = document.createElement('blockquote');
        const p = document.createElement('p');

        document.appendChild(article);
        article.appendChild(h2);
        article.appendChild(block);
        article.appendChild(p);

        h2.textContent = titles[i];
        block.textContent = contents[i];
        p.textContent = `By: ${users[i]}`;

    }


}




// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts(){
    const h2 = document.createElement('h2');
    h2.textContent = 'Blog post example';
    main.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = 'Author: John Doe';
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(){
    users = JSON.parse(localStorage.getItem('username'));
    titles = JSON.parse(localStorage.getItem('title'));
    contents = JSON.parse(localStorage.getItem('content'));

    if (users !== null){
        createBlog();
    } else {
        noPosts();
    }
}
// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
redirectPage();

