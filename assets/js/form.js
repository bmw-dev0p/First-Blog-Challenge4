// TODO: Create a variable that selects the form element
const form = document.querySelector('.user-input');
const errorElement = document.querySelector('#error');
console.log('form.js activated');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmit(event) {
    // stops form from submitting twice
    event.preventDefault();
    //collect user input
    const userCurrent = (document.querySelector('#username').value).trim();
    const titleCurrent = (document.querySelector('#title').value).trim();
    const contentCurrent = (document.querySelector('#content').value).trim();

    let storage;

    let blogData = {
        username: userCurrent,
        title: titleCurrent,
        content: contentCurrent
    };

    console.log('error activated');
    // alerts user if any fields are empty, then exits function
    if (!userCurrent || !titleCurrent || !contentCurrent) {
        
        errorElement.textContent = 'Please complete the form.';
        return;
    } else {
        
        //check for previous stored data
        storage = JSON.parse(localStorage.getItem('blogData'));
        // add existing data to arrays
        if (storage) {
            storage.push(blogData);
        } else {
            storage = [];
            storage.push(blogData);
        }
    }
    // format the object for storage
    const blogDataS = JSON.stringify(storage);
    //store object in local
    localStorage.setItem('blogData', blogDataS);
    //check
    console.log(localStorage.getItem('blogData'));
    
    redirectPage('./blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', formSubmit);



