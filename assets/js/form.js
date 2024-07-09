// TODO: Create a variable that selects the form element
const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmit(event) {
    // stops form from submitting twice
    event.preventDefault(); 

    let blogData = {
        usernames: [],
        titles: [],
        contents: []
    };

    // get the current values of the form
    const userCurrent = (document.querySelector('#username').value).trim();
    const titleCurrent = (document.querySelector('#title').value).trim();
    const contentCurrent = (document.querySelector('#content').value).trim();

    // prompts user if any fields are empty, then exits function
    if (!userCurrent || !titleCurrent || !contentCurrent) {
        window.alert('Please fill out all the fields before submitting.');
        return;
    } else {
        //check for previous stored data
        let storage = JSON.parse(localStorage.getItem('blogData'));
        // add existing data to arrays
        if (storage) {
            blogData.usernames = storage.usernames;
            blogData.titles = storage.titles;
            blogData.contents = storage.contents;
        }
        //add existing data to arrays
        blogData.usernames.push(userCurrent);
        blogData.titles.push(titleCurrent);
        blogData.contents.push(contentCurrent);
        // format the object for storage
        const blogDataS = JSON.stringify(blogData);
        //store object in local
        localStorage.setItem('blogData', blogDataS);
        //check
        console.log(localStorage.getItem('blogData'));
    
    }
    redirectPage('./blog.html');
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', formSubmit);

