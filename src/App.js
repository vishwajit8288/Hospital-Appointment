import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Appointment from './components/Appointment';
import Patient from './components/Patient';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/appointment" >Appointment</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/Patient">Patient</Link>
              </li>

            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='appointment' element={<Appointment></Appointment>}></Route>
          <Route path='Patient' element={<Patient></Patient>}></Route>
          {/* <Route path='header' element={<Header/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
