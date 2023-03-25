import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Navigation } from "./components/navigation/Navigation";
import { HomePage } from "./components/homePage/HomePage";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/allProjectsPage/Projects";
import { ProjectDetails } from './components/projectDetailsPage/ProjectDetails';
import { EditProject } from './components/editProgectPage/EditProject';
import { CreateProject } from './components/createProjectPage/CreateProject';
import { About } from "./components/aboutPage/About";
import { Contact } from "./components/contactPage/Contact";
import { Profile } from './components/profilePage/Profile';
import { EditUserDetails } from './components/profilePage/EditUserDatails';
import { NotFound } from './components/404Page/404';
import { Register } from './components/authPages/Register';
import { Login } from './components/authPages/Login';
import { Logout } from './components/authPages/Logout';


function App() {

  let _id = useSelector((state) => state.user._id);

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
        <Route path='/edit-user-details/:id' element={_id ? <EditUserDetails /> : <NotFound />} />
        <Route path='/add-project' element={_id ? <CreateProject /> : <NotFound />} />
        <Route path='/edit-project/:id' element={_id ? <EditProject /> : <NotFound />} />
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
