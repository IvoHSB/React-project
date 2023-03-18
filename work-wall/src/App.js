import { Navigation } from "./components/navigation/Navigation";
import { HomePage } from "./components/homePage/HmePage";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projectsPage/Projects";
import { About } from "./components/aboutPage/About";
import { Contact } from "./components/contactPage/Contact";


function App() {
  return (
    <>
      <Navigation />
      {/* <HomePage /> */}
      {/* <Projects /> */}
      {/* <About /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
