import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpForm from './components/sign-up-form/sign-up-form.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/authentication/authentication.component'
import TicTacToe from './utils/games/tictactoe.component';
import Authentication from './routes/authentication/authentication.component';

const Shop =() => {
  return <h2>I am the Shop Page</h2>
}

const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up-form' element={<SignUpForm />} />
          <Route path='games/tic-tac-toe' element={<TicTacToe />} />
        </Route>
      </Routes>
  );
}

export default App;
