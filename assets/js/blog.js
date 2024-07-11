// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backBtn = document.querySelector('#back');
    
// TODO: Create a function that builds an element and appends it to the DOM

function createBlog(){
       const blogPosts = JSON.parse(localStorage.getItem('blogData'));  
    for (let i = 0; i < blogPosts.length; i++){

        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const block = document.createElement('blockquote');
        const p = document.createElement('p')
        
        h2.textContent = blogPosts[i].title;
        block.textContent = blogPosts[i].content;
        p.textContent = `Posted by: ${blogPosts[i].username}`;

        main.appendChild(article);
        article.appendChild(h2);
        article.appendChild(block);
        article.appendChild(p);  
    } 
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts(){
    //probably could do this different ways
    //if it was allowed, I would just hard code the html, but decided to create it here
    console.log('noPosts activated')
    window.alert('No user blog posts to display. Please use the back button to return to the form.');
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(){

    if (localStorage.getItem("blogData") === null){
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