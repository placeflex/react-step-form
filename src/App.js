import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Step1 } from "./Step1";

const Step2 = () => {
  return <>Step2 </>;
};

const Step3 = () => {
  return <>Step3 </>;
};

const Result = () => {
  return <>Result </>;
};

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
