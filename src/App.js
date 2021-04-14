import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LatestPage from './modules/LatestPage.js'
import AboutUsPage from './modules/AboutUsPage.js'
import BrainFoodPage from './modules/BrainFoodPage.js'
import ShowcasePage from './modules/ShowcasePage.js'

import TopNav from './modules/TopNav.js'
import Title from './modules/Title.js'

function App() {
  return (
    <div className="App">
      <Title />
      <TopNav/>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LatestPage />
          </Route>
          <Route exact path='/about'>
            <AboutUsPage />
          </Route>
          <Route exact path='/showcase'>
            <ShowcasePage />
          </Route>
          <Route exact path='/brain'>
            <BrainFoodPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
