import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoutes } from "./constants/AppRoutes";
import Navigation from "./components/navigation";
import Authentication from "./components/authentication";
import Settings from "./components/settings";
import Dashboard from "./components/dashboard";
import Suppliers from "./components/suppliers";
import Products from "./components/products";
import StocksManagement from "./components/stocks-management";
import Customers from "./components/customers";
import Sales from "./components/sales";
import Expenses from "./components/expenses";
import Reports from "./components/reports";
import Profile from "./components/profile";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={AppRoutes.AUTHENTICATION} component={Authentication} />
        <Route exact path={AppRoutes.DASHBOARD} component={Dashboard} />
        <Route exact path={AppRoutes.SETTINGS} component={Settings} />
        <Route exact path={AppRoutes.SUPPLIERS} component={Suppliers} />
        <Route exact path={AppRoutes.PRODUCTS} component={Products} />
        <Route exact path={AppRoutes.STOCKSMANAGEMENT} component={StocksManagement} />
        <Route exact path={AppRoutes.CUSTOMERS} component={Customers} />
        <Route exact path={AppRoutes.SALES} component={Sales} />
        <Route exact path={AppRoutes.EXPENSES} component={Expenses} />
        <Route exact path={AppRoutes.REPORTS} component={Reports} />
        <Route exact path={AppRoutes.PROFILE} component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;
