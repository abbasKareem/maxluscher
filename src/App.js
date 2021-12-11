import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import LoginScreen from "./pages/LoginScreen"
import RegisterScreen from "./pages/RegisterScreen"
import WellcomeScreen from "./pages/WellcomeScreen"
import FormInformation from "./pages/FormInformation"
import FirstTextScreen from "./pages/FirstTextScreen"
import SecondTextScreen from "./pages/SecondTextScreen"
import ThirdTextScreen from "./pages/ThirdTextScreen"
import ForthTextScreen from "./pages/ForthTextScreen"
import FifthTextScreen from "./pages/FifthTextScreen"
import SixthTextScreen from "./pages/SixthTextScreen"
import SeventhTextScreen from "./pages/SeventhTextScreen"
import DoneScreen from "./pages/DoneScreen"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/welcome" element={<WellcomeScreen />} />
        <Route path="/user-form" element={<FormInformation />} />
        <Route path="/first-test" element={<FirstTextScreen />} />
        <Route path="/second-test" element={<SecondTextScreen />} />
        <Route path="/third-test" element={<ThirdTextScreen />} />
        <Route path="/forth-test" element={<ForthTextScreen />} />
        <Route path="/fifth-test" element={<FifthTextScreen />} />
        <Route path="/sixth-test" element={<SixthTextScreen />} />
        <Route path="/seventh-test" element={<SeventhTextScreen />} />
        <Route path="/done" element={<DoneScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
