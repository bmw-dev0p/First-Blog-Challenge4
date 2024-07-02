// TODO: Create a variable that selects the form element
const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmit(event) {
    // stops form from submitting twice
    event.preventDefault(); 

    const user = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    console.log(user, title, content)

    // prompts user if any fields are empty, then exits function
    if (!user || !title || !content) {
        window.alert('Please fill out all the fields before submitting.');
        return;
    } else {
        // store data in local 
        localStorage.setItem('username', user);
        localStorage.setItem('title', title);
        localStorage.setItem('content', content);
    }

    // Redirect to the blog page
    // redirectPage();
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', formSubmit);

