import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoutes } from "./contants/AppRoutes";

import PinLogIn from "./components/login";
import Settings from "./components/settings";
import Home from "./components/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoutes.LOGIN} component={PinLogIn} />
        <Route exact path={AppRoutes.HOME} component={Home} />
        <Route exact path={AppRoutes.SETTINGS} component={Settings} />
      </Switch>
    </Router>
  );
};

export default Routes;
