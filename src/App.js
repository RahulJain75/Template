import "./App.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Ourstory1 from "./components/Ourstory1";
import Marketing from "./components/Marketing";
import Ourcreators from "./components/Ourcreators";
import Ourclient from "./components/Ourclient";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Ourstory1 />
      <Marketing />
      <Ourcreators />
      <Ourclient />
      <Footer />
    </div>
  );
}

export default App;
