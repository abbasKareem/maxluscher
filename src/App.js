import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import LoginScreen from "./pages/LoginScreen"
import RegisterScreen from "./pages/RegisterScreen"
import WellcomeScreen from "./pages/WellcomeScreen"
import FormInformation from "./pages/FormInformation"
import FirstTextScreen from "./pages/FirstTextScreen"
import SecondTextScreen from "./pages/SecondTextScreen"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
