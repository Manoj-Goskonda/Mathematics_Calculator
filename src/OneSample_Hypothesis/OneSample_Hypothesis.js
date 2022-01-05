import React,{useState} from 'react';
import pcorr from '../assets/Images/pcorrformula.png'
import OneSample_Hypothesis_GetSolution from './OneSample_Hypothesis_GetSolution';
import OneSample_Hypothesis_Solution from './OneSample_Hypothesis_Solution';
import OneSample_Hypothesis_Theory from './OneSample_Hypothesis_Theory';


const OneSample_Hypothesis = () =>{
    const [showcode,setshowcode] = useState(false);

const sendtoparent =(index)=>{
    setshowcode(index)
}

    const [getSolutionDataObject,setSolutionDataObject] = useState({});

    const getSolutionData = (selected,changeHypothesis1,changeHypothesis2,numProbability,changeCriticalPValue,numTestStatistic,choiceConfidenceInterval
        ,numDecimalPoint,numPopulationMean,numSampleAvg, numSampleSize,numSampleSD,numMulValue) =>{
    console.log("inside Parent ===============>",selected,changeHypothesis1,changeHypothesis2,numProbability,changeCriticalPValue,numTestStatistic,choiceConfidenceInterval
    ,numDecimalPoint,numPopulationMean,numSampleAvg, numSampleSize,numSampleSD,numMulValue);
    let dataobj = {};
    dataobj.selected = selected;
    dataobj.changeHypothesis1 = changeHypothesis1;
    dataobj.changeHypothesis2 = changeHypothesis2;
    dataobj.numProbability = numProbability;
    dataobj.changeCriticalPValue = changeCriticalPValue;
    dataobj.numTestStatistic = numTestStatistic;
    dataobj.choiceConfidenceInterval = choiceConfidenceInterval;
    dataobj.numDecimalPoint = numDecimalPoint;
    dataobj.numPopulationMean = numPopulationMean;
    dataobj.numSampleAvg = numSampleAvg;
    dataobj.numSampleSize = numSampleSize;
    dataobj.numSampleSD = numSampleSD;
    dataobj.numMulValue = numMulValue;
    setSolutionDataObject(dataobj);
  }
  
    return(
        <>
        <div className="row justify-content-center">
                <div classNameName="col-lg-12 col-12 multitabs">
                    <ul className="nav nav-tabs tabsinfo" role="tablist">
                        <li className="nav-item tab">
                            <a className={`nav-link ${showcode == false ? "active" : " "}`} id="getsolution" data-toggle="tab" href="#tabs-41" role="tab">Get Solution </a>
                        </li>
                        {showcode == true ? <li className="nav-item tab">
                            <a className={`nav-link ${showcode == true ? "active" : " "}`} data-toggle="tab" href="#tabs-42" role="tab" >Solution</a>
                        </li> : null}
                        <li className="nav-item tab">
                            <a className="nav-link" data-toggle="tab" href="#tabs-43" role="tab">Theory</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane ${showcode == false ? "active" : " "}`} id="tabs-41" role="tabpanel">
                            <OneSample_Hypothesis_GetSolution sendtoparent={sendtoparent} getSolutionData={getSolutionData} />
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-42" role="tabpanel">
                            <OneSample_Hypothesis_Solution getSolutionDataObject={getSolutionDataObject} />
                        </div> : null}
                        <div className="tab-pane" id="tabs-43" role="tabpanel">
                            <OneSample_Hypothesis_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneSample_Hypothesis;