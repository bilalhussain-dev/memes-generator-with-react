// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import State from './components/State';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Meme></Meme>

       <div className="test-stats">
         <State></State>
       </div>
    </div>
  );
}

export default App;
