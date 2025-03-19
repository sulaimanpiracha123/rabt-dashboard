import "flowbite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import Subscribition from "./pages/Subscribition";
import Theme from "./pages/Theme";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import EmailSign from "./pages/EmailSign";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/help" element={<Help />} /> 
        <Route path="/subscribtion" element={<Subscribition/>}/>
        <Route path="/theme" element ={<Theme/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/company-email-signature" element ={<EmailSign/>}/>

      </Routes>
    </>
  );
}

export default App;
