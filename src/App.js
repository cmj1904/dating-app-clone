
import './App.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className='app'>
      <h1>Dating App Clone</h1>
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}


export default App;
