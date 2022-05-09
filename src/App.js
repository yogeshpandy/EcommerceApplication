import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component'
import TicTacToe from './utils/games/tictactoe.component';

const Shop =() => {
  return <h2>I am the Shop Page</h2>
}

const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='games/tic-tac-toe' element={<TicTacToe />} />
        </Route>
      </Routes>
  );
}

export default App;
