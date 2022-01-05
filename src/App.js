import React from "react";
import Home from "./Home";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import { jStat } from "../node_modules/jstat/dist/jstat.min";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Student_Calc from "./Critical_Calc/Student_Calc";
import Standard_Calc from "./Standard_Normal/Standard_Calc";
import Chi_Square_Calc from "./Chi_square/Chi_Square_Calc";
import Fisher_Calc from "./Fisher_Snedecor/Fisher_Calc";
import Corr_Calc from "./P_Corr/Corr_Calc";
import Critical from "./Critical_P_Value/PValue";
import MainNavBar from "./MainNavBar";
import Critical_Nav from "./criticalvalue/Critical_Nav";
import T_Score_Calc from "./T_Score/T_Score_Calc";
import Z_Score_Calc from "./Z_Score/Z_Score_Calc";
import X2_Score_Calc from "./X2 Score/X2_Score_Calc";
import F_Score_Calc from "./F Score/F_Score_Calc";
import Distributions_Nav from "./Distribution/Distributions_Nav";
import Binomial_Calc from "./Binomial Distribution/Binomial_Calc";
import Poisson_Calc from "./Poisson Distribution/Poisson_Calc";
import Normal_Calc from "./Normal Distribution/Normal_Calc";
import Uniform_Calc from "./Uniform Distribution/Uniform_Calc";
import Geometric_Calc from "./Geometric Distribution/Geometric_Calc";
import Negative_Calc from "./Negative Binomial Distribution/Negative_Calc";
import Hypergeometric_Calc from "./Hypergeometric Distrubution/Hypergeometric_Calc";
import Weibull_Calc from "./Weibuil Disrtibution/Weibull_Calc";
import Lognormal_Calc from "./Lognormal Distribution/Lognormal_Calc";
import Gamma_Calc from "./Gamma Distribution/Gamma_Calc";
import OneSample_Hypothesis_Calc from "./OneSample_Hypothesis/OneSample_Hypothesis_Calc";
import TwoSample_Equal_Calc from "./TwoSample_Equal_Hypothesis/TwoSample_Equal_Calc";
import TwoSample_Unequal_Calc from "./TwoSample_Unequal_Hypothesis/TwoSample_Unequal_Calc";
import Paired_T_Test_Calc from './Paired_T-Test_Hypothesis/Paired_T_Test_Calc';
import OneSample_ZTest_Calc from './OneSample_ZTest_Hypothesis/OneSample_ZTest_Calc';
import TwoSample_ZTest_Calc from './TwoSample_ZTest_Hypothesis/TwoSample_ZTest_Calc';
import OneSample_ZTest_Praportion_Calc from './OneSample_ZTest_Praportion_Hypothesis/OneSample_ZTest_Praportion_Calc';
import TwoSample_ZTest_Praportion_Calc from './TwoSample_ZTest_Praportion_Hypothesis/TwoSample_ZTest_Praportion_Calc';

import NavBar from "./NavBar";


const App = () => {
  // console.log(jStat);

  // var vector = jStat(0, 1, 5, function (x) {
  //   return x * 2;
  // });

  // console.log(vector);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/critical" component={Critical_Nav} />
            <Route exact path="/student" component={Student_Calc} />
            <Route exact path="/standard" component={Standard_Calc} />
            <Route exact path="/square" component={Chi_Square_Calc} />
            <Route exact path="/fisher" component={Fisher_Calc} />
            {/* <Route exact path="/pcorr" component={Corr_Calc} /> */}
            <Route exact path="/tscore" component={T_Score_Calc} />
            <Route exact path="/zscore" component={Z_Score_Calc} />
            <Route exact path="/xscore" component={X2_Score_Calc} />
            <Route exact path="/fscore" component={F_Score_Calc} />
            <Route exact path="/distributions" component={Distributions_Nav} />
            <Route exact path="/binomial" component={Binomial_Calc} />
            <Route exact path="/poisson" component={Poisson_Calc} />
            <Route exact path="/normal" component={Normal_Calc} />
            <Route exact path="/uniform" component={Uniform_Calc} />
            <Route exact path="/geometric" component={Geometric_Calc} />
            <Route exact path="/negative" component={Negative_Calc} />
            <Route exact path="/hypergeometric" component={Hypergeometric_Calc}/>
            <Route exact path="/weibull" component={Weibull_Calc} />
            <Route exact path="/lognormal" component={Lognormal_Calc} />
            <Route exact path="/gamma" component={Gamma_Calc} />
            <Route exact path="/hypothesis" component={OneSample_Hypothesis_Calc} />
            <Route exact path="/twosampleequal" component={TwoSample_Equal_Calc} />
            <Route exact path="/twosampleunequal" component={TwoSample_Unequal_Calc} />
            <Route exact path="/pairedttest" component={Paired_T_Test_Calc} />
            <Route exact path="/onesampleztest" component={OneSample_ZTest_Calc} />
            <Route exact path="/twosampleztest" component={TwoSample_ZTest_Calc} />
            <Route exact path="/onesamplepraportion" component={OneSample_ZTest_Praportion_Calc} />
            <Route exact path="/twosamplepraportion" component={TwoSample_ZTest_Praportion_Calc} />

          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
