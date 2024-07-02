# First-Blog-Challenge4
University of Richmond Bootcamp - Code Challenge 4 - My First Blog

## Grading Requirements
This Challenge is graded based on the following criteria:

## Landing Page 35%
 The landing page should contain the following HTML (5 pts):

* A form element that contains the following:

    * An input element whose label and id are username.

    * An input element whose label and id are title.

    * A textarea element whose label and id are content.

The form must use the following logic:

* Display the error message "Please complete the form." when the form is submitted with empty fields. (10 pts)

* Store form data in local storage when submitted with valid data. (10 pts)

    * Blog post objects in local storage must contain username, title, and content properties. (5 pts)
* Redirect to the blog page when valid data is submitted. (5 pts)

## Blog Page HTML 10%
The blog page must contain the following HTML:

* A header element that contains (5 pts):

    * A light mode/dark mode toggle. The toggle element can be anything you like, but the id must be toggle.

    * A "Back" button with an id of back.

* A main element. (5 pts)

## Toggle Logic 20%
When the light mode/dark mode toggle is clicked:

* The styles of the page change to match the mode. (10 pts)

* The --circle-color attribute changes to match the mode. (10 pts)

## Blog Post Logic 35%
The Blog Post page must perform the following:

* Render blog posts to the page with data pulled from localStorage. (10 pts)

    * Rendered blog posts must include the author's username, and the post's title and content. (10 pts)

    * If no blog posts are found in localStorage, display a message that states: "No Blog posts yet...". (10 pts)

* Redirect the user to the landing page when the "Back" button is clicked. (5 pts)
