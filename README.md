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

## Usage

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