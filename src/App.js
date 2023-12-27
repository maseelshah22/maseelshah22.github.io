import Navbar from "./components/NavBar/navbar.js";
import Intro from "./components/Intro/intro.js";
import Experience from "./components/About/experience.js";
import Works from "./components/works/works.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Experience/>
    <Works/>
    <Contact/>
    <Footer/>
    </div>
    
  );
}

export default App;
