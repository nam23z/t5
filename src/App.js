import { Routes, Route } from 'react-router-dom';
import Home from './Containers/Home/Home';
// import TShirt 

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newsletter/tshirt' />
      </Routes>
  );
}

export default App;
