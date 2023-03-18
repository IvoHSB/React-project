import { Navigation } from "./components/navigation/Navigation";
import { HomePage } from "./components/homePage/HmePage";
import { Footer } from "./components/footer/Footer";
import { Projects } from "./components/projectsPage/Projects";


function App() {
  return (
    <>
      <Navigation />
      {/* <HomePage /> */}
      <Projects />
      <Footer />
    </>
  );
}

export default App;
