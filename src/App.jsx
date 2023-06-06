import { Routes , Route, Navigate } from 'react-router-dom';

import Login from './components/Login'
import Listado from "./components/Listado";
import Header from './components/Header';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path='/detalle' element={<Detalle />} />
        <Route path='/resultados' element={<Resultados/>} />
        <Route path='*' element={ < Navigate to='/' /> } />
      </Routes>
    </>
  )
}

export default App
