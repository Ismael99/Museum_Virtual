import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarContainer from './pages/NavbarContainer'
import HomeContainer from './pages/HomeContainer'

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/museum" component={NavbarContainer} />

    </Switch>
  </BrowserRouter>
);

export default App;
