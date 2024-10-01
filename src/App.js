
// eslint-disable-next-line no-unused-vars
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import PatientList from "./pages/PatientList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
        <Route path="/" exact component={Home} />
        <Route path="" exact component={Home} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/patientList" component={PatientList} />
          {/* <Redirect from="*" to="/dashboard" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
