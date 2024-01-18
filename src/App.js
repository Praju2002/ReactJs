import logo from "./logo.svg";
import "./App.css";
import "./component/nav_bar/NavbarComponent.css"
import "./component/footer/FooterComponent.css"
import "./component/content/ContentComponent.css"
import NavBar from "./component/nav_bar/NavbarComponent";
import Footer from "./component/footer/FooterComponent";
import Content from "./component/content/content.component";

function App() {
  return (
    <div>
      <NavBar />
      
      <Content />

      <Footer />
    </div>
  );
}

export default App;
