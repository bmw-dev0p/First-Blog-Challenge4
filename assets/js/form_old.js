// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
let users = [];
let titles = [];
let contents = [];

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmit(event) {

    // stops form from submitting twice
    event.preventDefault(); 

    // get the current values of the form
    const userCurrent = (document.querySelector('#username').value).trim();
    const titleCurrent = (document.querySelector('#title').value).trim();
    const contentCurrent = (document.querySelector('#content').value).trim();

    //check to make sure the values are being stored
    // console.log(userCurrent, titleCurrent, contentCurrent)

    // prompts user if any fields are empty, then exits function
    if (!userCurrent || !titleCurrent || !contentCurrent) {
        window.alert('Please fill out all the fields before submitting.');
        return;
    } else {
        //check for previous stored data
        userStorage = JSON.parse(localStorage.getItem('username'));
        titleStorage = JSON.parse(localStorage.getItem('title'));
        contentStorage = JSON.parse(localStorage.getItem('content'));
        // add existing data to arrays
        users.concat(userStorage);
        titles.concat(titleStorage);
        contents.concat(contentStorage);
        console.log(users);
        //add form data to array
        users.push(userCurrent);
        titles.push(titleCurrent);
        contents.push(contentCurrent);
        console.log(users);
        // format the array for storage
        const usersS = JSON.stringify(users);
        const titlesS = JSON.stringify(titles);
        const contentsS = JSON.stringify(contents);
        
        // store array in local 
        localStorage.setItem('username', usersS);
        localStorage.setItem('title', titlesS);
        localStorage.setItem('content', contentsS);   
        console.log(localStorage.getItem('username'));     
    }
    // redirectPage('./blog.html');
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', formSubmit);

