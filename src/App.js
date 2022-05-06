import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';


const Shop =() => {
  return <h2>I am the Shop Page</h2>
}

const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
  );
}

export default App;
