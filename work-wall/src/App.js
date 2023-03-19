import { Routes, Route } from 'react-router-dom';

import { Navigation } from "./components/navigation/Navigation";
import { HomePage } from "./components/homePage/HmePage";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projectsPage/Projects";
import { About } from "./components/aboutPage/About";
import { Contact } from "./components/contactPage/Contact";
import { Profile } from './components/profilePage/Profile';
import { NotFound } from './components/404Page/404';
import { Register } from './components/registerPage/Register';
import { Login } from './components/loginPage/Login';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
