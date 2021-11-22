import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoutes } from "./constants/AppRoutes";
import Authentication from "./components/authentication";
import Settings from "./components/settings";
import Dashboard from "./components/dashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Authentication} />
        <Route exact path={AppRoutes.Dashboard} component={Dashboard} />
        <Route exact path={AppRoutes.SETTINGS} component={Settings} />
      </Switch>
    </Router>
  );
};

export default Routes;
