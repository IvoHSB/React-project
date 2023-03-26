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

npm run strat
```
## Description
This is a site where people can register and upload their projects publicly. They can view and comment on other people's projects. They can also edit and delete their own projects.

## Functionality

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
The similar projects section is only visible if there are any. Projects in the same category are considered as such.