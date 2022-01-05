import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'

const OneSample_ZTest_RowData = () => {
    const [selected, setSelected] = useState(" ");
    
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };
    const Teststatistic = [
        "1",
        "2",
        "3",
    ];
    const CriticalValue = ["1", "2", "3"];
    const PValue = ["1", "2", "3", "4"];
    let type = null;
    let options = null;
    if (selected === "Test Statistics") {
        type = Teststatistic;
    } else if (selected === "Critical Value") {
        type = CriticalValue;
    } else if (selected === "P Value") {
        type = PValue;
    }
    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }
    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <div className="container fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-12 box row_data2">
                        <div className="input container">
                            <div className="row ">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row">
                                        <div className="col-lg-12 col-12 row rowdata">
                                            <h1 className="get-text">Enter Row Data :</h1>
                                            <CancelOutlinedIcon />
                                        </div>
                                    </div>
                                    <p className="sol-text">Note:</p>
                                    <p>1.You may change the group name to real name</p>
                                    <p>2. When entering data, each value separated by Enter/ space / comma</p>
                                    <div className="col-lg-10 col-10 ">
                                        <div className="row">
                                            <div className="Col-lg-3 col-3">
                                                <div className="group-box">
                                                    <div class="row4">
                                                        <p>Group 1 </p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="FormControlTextarea1">
                                                        </label>
                                                        <textarea
                                                            className="form-control2"
                                                            id="exampleFormControlTextarea1"
                                                            rows="5"
                                                        />
                                                    </div>
                                                </div>
                                                <p>Total observations: 4</p><br></br>
                                            </div>
                                        </div>
                                    </div>
                                   <p className="sol-text">Optional :</p>
                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="female" control={<Radio color="primary" />} label="Q - Q plot (Quantile - Quantile Plot) " />
                                        <FormControlLabel value="end" control={<Radio color="primary" />} label="Normality    (The shipiro walk test)" />
                                    </RadioGroup>
                                    <div className='col-lg-12 col-6 mar'>
                                        <div className="btn">
                                            <button type="submit" className="solution-btn ml-3">
                                                Calculate Summary
                                            </button>
                                            <button type="submit" className="solution-btn2 ml-3">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneSample_ZTest_RowData;