import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarContainer from './pages/NavbarContainer'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={NavbarContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
