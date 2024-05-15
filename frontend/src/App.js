import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages and components 

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/More/About";
import Contact from "./components/More/Contact";
import Team from "./components/More/Team";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            >
            </Route>
            <Route
                path="/team"
                element={<Team />}
              ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
