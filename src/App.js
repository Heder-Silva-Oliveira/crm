import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlogalStyle";
import Home from "./pages/Home";
import Equipea from "./pages/Equipea";
import Equipeb from "./pages/Equipeb";
import Equipec from "./pages/Equipec";
import Equiped from "./pages/Equiped";
import Equipee from "./pages/Equipee";
import Sidebarj from "./pages/Sidebarj";
import Equipef from "./pages/Equipef";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/equipea" element={<Equipea />} />
            <Route path="/equipeb" element={<Equipeb />} />
            <Route path="/equipec" element={<Equipec />} />
            <Route path="/equiped" element={<Equiped />} />
            <Route path="/equipee" element={<Equipee />} />
            <Route path="/equipef" element={<Equipef />} />
            <Route path="/sidebarj" element={<Sidebarj/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
//teste
