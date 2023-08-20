import "./App.css";
import "./index.css";
import Covid from "./components/Covid.tsx";
import "reactjs-popup/dist/index.css";
import Contact from "./components/Contact.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { BrowserRouter ,Routes,Link,Route} from "react-router-dom";

function App() {
  return (
    <div className="flex">
    <div>
    <Sidebar />
    </div>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />} exact={true} />
          <Route path="/chart" element={<Covid />} exact={true} />
        </Routes>
        </BrowserRouter>
      </div>


  );
}

export default App;
