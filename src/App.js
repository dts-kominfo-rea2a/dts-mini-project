import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import LoginOrRegisterForm from './components/LoginOrRegisterForm';

function App() {
  return (
    <div className="App">
      <LoginOrRegisterForm />
      {/* <NavBar />
      <HomePage /> */}
    </div>
  );
}

export default App;
