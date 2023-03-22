import { Routes, Route } from 'react-router-dom';

import { Navigation } from "./components/navigation/Navigation";
import { HomePage } from "./components/homePage/HmePage";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/allProjectsPage/Projects";
import { ProjectDetails } from './components/projectDetailsPage/ProjectDetails';
import { CreateProject } from './components/createProjectPage/CreateProject';
import { About } from "./components/aboutPage/About";
import { Contact } from "./components/contactPage/Contact";
import { Profile } from './components/profilePage/Profile';
import { EditUserDetails } from './components/profilePage/EditUserDatails';
import { NotFound } from './components/404Page/404';
import { Register } from './components/registerPage/Register';
import { Login } from './components/loginPage/Login';
import { Logout } from './components/logoutPage/Logout';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/edit-user-details/:id' element={<EditUserDetails />} />
        <Route path='/add-project' element={<CreateProject />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
