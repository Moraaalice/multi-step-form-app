import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Step1 from './Components/StepOne';
import Step2 from './Components/StepTwo';
import Step3 from './Components/StepThree';
import Step4 from './Components/StepFour';
import Preview from './Components/PreviewPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4/>} />
        <Route path="/preview" element={<Preview/>} />


      </Routes>
    </Router>
    </div>
  );
}

export default App;
