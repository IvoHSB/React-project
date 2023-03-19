import { Routes, Route } from 'react-router-dom';

import { Navigation } from "./components/navigation/Navigation";
import { HomePage } from "./components/homePage/HmePage";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projectsPage/Projects";
import { About } from "./components/aboutPage/About";
import { Contact } from "./components/contactPage/Contact";
import { Profile } from './components/profilePage/profile';
import { NotFound } from './components/404Page/404';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />\
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
