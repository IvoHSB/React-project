# React-project

## Installation

Use [git](https://git-scm.com/downloads) to clone project.

```bash
git clone https://github.com/IvoHSB/React-project.git

cd React-project\work-wall

npm install
```

## Run

First you need run server.

```bash
cd React-project\server

node surver.js
```
Аfter you have run the server you can start the work-wall application.

```bash
cd React-project\work-wall

npm strat
```
## Description
This is a site where people can register and upload their projects publicly. They can view and comment on other people's projects. They can also edit and delete their own projects.

## Functionality

All pages that take data from the server have a loading indicator until they receive the data.

### Navbar and Footer

#### Navbar are visible on all pages.
Navbar consists of a logo that leads to the home page and links home, projects, add project, about, contact us, profile, logout, login and register. By add project, profile and logout are visible and accessible only if there is a logged-in user. And login and register are visible and accessible only when there is no logged-in user.
Home, projects, about and contact us are always visible and accessible.

The links lead to the respective pages:

Home - leads to the home page <br />
Projects - leads to a catalog of all published projects <br />
Add project - leads to a form for posting a new project <br />
About - leads to the about page <br />
Contact us - leads to the contact page <br />
Profile - leads to the profile of the logged-in user <br />
Logout - Takes the user out of his account and takes him to the login page <br />
Login - leads to a page with a login form <br />
Register - takes you to a page with a register form

#### Footer are visible on all pages.
It doesn't change. There are two links on it, one leads to the contact us page, the other to the about page.

### Home Page

Home page is a static page with two buttons.
The first "Tell me more" is an anchor next to the "benefits" section.
The second "See Projects" leads to the Projects page.

### Projects Page

This page is a catalog of all published projects. <br />
If there are no published projects, there is an inscription "THERE ARE NO PROJECTS" and a "Be a first" button. If you are logged in and press it, you will go to the Add project page, but if you are not logged in and press it, it will take you to the login page. <br />
If there are published projects you will see them.
If there are more than 6 projects, pagination will appear in the lower left corner of the page. <br /> 
Clicking on a project will take you to its details page.

###  Project Details Page

This page contains detailed information about a project, a comments section, and a similar projects section.<br />
If you are logged in and you are the owner of the project, there will be two buttons below the detailed information: <br />
Edit details - which leads to a page with a form for editing information about the project. <br />
Delete Project - which opens a confirmation window to delete the project. If you confirm, the project will be deleted and you will be taken to the projects page. <br />
If there are no comments, the comments section will say "No available comments."
If you are not logged in you will only be able to read them, but if you are logged in and you are not the owner of the project you will be able to write comments, if you are the owner you will only be able to read them. <br />
The similar projects section is only visible if there are any. Projects in the same category are considered as such. A maximum of 3 projects are displayed.
<br /><br />

This page has the following links:<br />
<br />
Name of the project author - this leads to the profile of the project author.<br />
Name of each comment author - this leads to the profile of the comment author.<br />
Similar project - it leads to the details page of the project.

### Add and Edit Project

Represent a form with fields and their validations: <br /> <br />
Photo - is allowed to start with "http://" or "https://" and is optional.<br />
Project title - has validation for a minimum of 3 characters and is required.<br />
Project category - select which is mandatory and if you select Other, a new field "Other category" will appear.<br />
Other category - this field is mandatory.<br />
Description - not mandatory.<br />
Web site - is allowed to start with "http://" or "https://" and is optional.<br />
Select Project Technology - these are optional check buttons.<br />

The edit form has filled-in fields with the project data, while the create form has completely cleared fields.<br />
After seva/post project redirect to project details page.

### About Page

About page is a static page without functionality.

### Contact Us Page

It also consists of a map with an address marker, a contact form and contact information.<br />
<br />
The form has fields:<br />
Name - mandatory and with validation for a minimum number of characters (3).<br />
Email - mandatory and with validation for correct email.<br />
Message - mandatory with validation for a minimum number of characters (15).<br /><br />

After successfully sending the message, a window will appear with a notification that it was sent successfully and after 5 seconds it will redirect you to the home page.

### Register Page

It contains four fields, all of which are mandatory:<br /><br />
Username - validation for a minimum number of characters (3).<br />
Email - Validate for correct email.<br />
Password - validation to be the same as confirm password and minimum number of characters (9).<br />
Confirm password - validation must be the same as the password and minimum number of characters (9).<br /><br />

There is also a link to the login page. <br />

After clicking Create Account with correctly filled information, it will take you to the edit profile page.

### Login Page

It contains two fields, all of which are mandatory:<br /><br />

Email - validate for correct email.<br />
Password - validation to be the same as confirm password and minimum number of characters (9).<br /><br />

There is also a link to the register page. <br />

After clicking Log in with correctly filled information, it will take you to the home page.

### Profile Page

Contains detailed information about the user. There is a section with his projects which is visible only if the user has projects. If you are logged in and you are the owner of the profile, you have a change info button that leads to the Edit Profile Page.

### Edit Profile Page

Represent a form with fields and their validations: <br /> <br />
Photo - is allowed to start with "http://" or "https://" and is optional.<br />
Phone number - is optional.<br />
Web site - is allowed to start with "http://" or "https://" and is optional.<br />
About you - not mandatory.<br />
Select Your Skills - these are optional check buttons.<br />
Other Skill - not mandatory.<br />

The edit form has filled-in fields with the profile data, while the create form has completely cleared fields.<br />
After continue redirect to profile page.

### 404 Page 

404 page is a static page with one button which leads to the home page.

## Auth

Home Page - Everyone has access.<br />
Projects Page - Everyone has access.<br />
Project Details Page - Everyone has access.<br />
Add and Edit Project - Only logged in users.<br />
About Page - Everyone has access.<br />
Contact Us Page - Everyone has access.<br />
Register Page - Only logged in users.<br />
Login Page - Only logged in users.<br />
Profile Page - Everyone has access.<br />
Edit Profile Page - Only logged in users.
