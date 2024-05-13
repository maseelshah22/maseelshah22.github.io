import Navbar from "./components/NavBar/navbar.jsx";
import Intro from "./components/Intro/intro.jsx";
import Experience from "./components/About/experience.jsx";
import Works from "./components/works/works.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

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
