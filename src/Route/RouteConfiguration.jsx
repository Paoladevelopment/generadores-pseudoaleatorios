import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Calculate } from '../pages/Calculate/Calculate';
import { Generador } from '../pages/Generador/Generador';

export const RoutesConfiguration = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Calculate />} />
        <Route path='/Generador' element={<Generador />} />
      </Routes>
    </Router>
  );
};
