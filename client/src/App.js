import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Alphabet from './pages/Alphabet'
import Phrases from './pages/Phrases'
import Flashcards from './pages/Flashcards'
import Documentation from './pages/Documentation'



function App() {
  return (
    <>
      <div id="phone">
        <div id = "main-wrapper" className="fancy-scrollbar">
        <div id="main">
        <div id="content">
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Alphabet' component={Alphabet}></Route>
      <Route exact path='/Phrases' component={Phrases}></Route>
      <Route exact path='/Flashcards' component={Flashcards}></Route>
      <Route exact path='/Documentation' component={Documentation}></Route>
      </Switch>
      </div>
      </div>
      </div>
      </div>
    </>
  );

}
export default App;
