import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// ### Router ###
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ### REDUX ###
import store from "./redux/store";
import { loadUser } from "./redux/actions/authActions";

// ### PAGES ###
import UserNavbar from "./components/Navbar/UserNavbar.component";
import Footer from "./components/Footer/Footer.component";
import LandingPage from "./pages/LandingPage/Landing.page";
import LoginPage from "./pages/LoginPage/Login.page";
import RegisterPage from "./pages/RegisterPage/Register.page";
import GraduateProfilPage from "./pages/GraduateProfilePage/GraduateProfile.page";
import EditGraduateProfile from "./pages/EditGraduateProfilePage/EditGraduateProfile.page";
import GraduatesSearchPage from "./pages/GraduatesSearchPage/GraduatesSearch.page";
import TeamPage from "./pages/TeamPage/Team.page";

class App extends React.Component {
  componentDidMount() {
    // load user when App renders
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
        <UserNavbar />
        <div className="col-12 page-layout">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/auth/login" component={LoginPage} />
            <Route exact path="/auth/register" component={RegisterPage} />
            <Route exact path="/graduates" component={GraduatesSearchPage} />
            <Route
              exact
              path="/graduate/profile"
              component={GraduateProfilPage}
            />
            <Route
              exact
              path="/graduate/update-profile/:id"
              component={EditGraduateProfile}
            />
            <Route exact path="/team-page" component={TeamPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
