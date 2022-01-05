import React,{useState} from 'react';
import pcorr from '../assets/Images/pcorrformula.png'
import TwoSample_ZTest_GetSolution from './TwoSample_ZTest_GetSolution';
import TwoSample_ZTest_Solution from './TwoSample_ZTest_Solution';
import TwoSample_ZTest_Theory from './TwoSample_ZTest_Theory';


const  TwoSample_ZTest = () =>{
    const[showcode,setshowcode]=useState(false)

const sendtoparent =(index)=>{
    setshowcode(index)
}

const [getSolutionDataObject,setSolutionDataObject] = useState({});

    const getSolutionData = (selected,changeHypothesis1,changeHypothesis2,numProbability,changeCriticalPValue, numDifference, numTestStatistic,choiceConfidenceInterval
        ,numDecimalPoint,numPopulationMean,numSampleAvg,numSampleAvg1, numSampleSize, numSampleSize1,numSampleSD,numSampleSD1,numMulValue) =>{
    console.log("inside Parent ===============>",selected,changeHypothesis1,changeHypothesis2,numProbability,changeCriticalPValue, numDifference,numTestStatistic,choiceConfidenceInterval
    ,numDecimalPoint,numPopulationMean,numSampleAvg,numSampleAvg1, numSampleSize, numSampleSize1,numSampleSD,numSampleSD1,numMulValue);
    let dataobj = {};
    dataobj.selected = selected;
    dataobj.changeHypothesis1 = changeHypothesis1;
    dataobj.changeHypothesis2 = changeHypothesis2;
    dataobj.numProbability = numProbability;
    dataobj.changeCriticalPValue = changeCriticalPValue;
    dataobj.numDifference = numDifference;
    dataobj.numTestStatistic = numTestStatistic;
    dataobj.choiceConfidenceInterval = choiceConfidenceInterval;
    dataobj.numDecimalPoint = numDecimalPoint;
    dataobj.numPopulationMean = numPopulationMean;
    dataobj.numSampleAvg = numSampleAvg;
    dataobj.numSampleAvg1 = numSampleAvg1;
    dataobj.numSampleSize = numSampleSize;
    dataobj.numSampleSize1 = numSampleSize1;
    dataobj.numSampleSD = numSampleSD;
    dataobj.numSampleSD1 = numSampleSD1;
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
                            < TwoSample_ZTest_GetSolution sendtoparent={sendtoparent} getSolutionData={getSolutionData}/>
                        </div>
                        {showcode == true ? <div className={`tab-pane ${showcode == true ? "active" : " "}`} id="tabs-42" role="tabpanel">
                            < TwoSample_ZTest_Solution getSolutionDataObject={getSolutionDataObject} />
                        </div> : null}
                        <div className="tab-pane" id="tabs-43" role="tabpanel">
                            < TwoSample_ZTest_Theory />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwoSample_ZTest;