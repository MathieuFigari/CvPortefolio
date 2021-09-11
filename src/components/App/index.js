// == Import
import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Knowledges from '../../pages/Knowledges';
import Portefolio from '../../pages/Portefolio';
import NotFound from '../../pages/NotFound';
import NavBar from '../Nav/index';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/contact" component={Contact} />
      <Route path="/competences" component={Knowledges} />
      <Route path="/portefolio" component={Portefolio} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

// == Export
export default App;
