import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../Service/Auth.service';
import DefectService from '../Service/Defect.service';
import './AddDefect.css';
const AddDefect = () => {

    const navigate = useNavigate();
    const [defect, setDefect] = useState({
        "id": 0,
        "DefectCategory": "",
        "DefectPriority": "",
        "UserIdDefect": AuthenticationService.getLoggedInUserId(),
        "DefectDescription": "",
        "Status": "Open"
    });

    const submitHandler = async (e) => {
        await DefectService.addDefect(defect);
        navigate("/dashboard");
    }
    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Add Defect</div>
                <div className="form">
                    <div>
                        <div className="input-container">
                            <label>Defect Category </label>
                            <select name="DefectCategory"
                                onChange={(e) => setDefect({ ...defect, [e.target.name]: e.target.value })}
                            >
                                <option>Please select category</option>
                                <option>UI</option>
                                <option>Functional</option>
                                <option>Change Request</option>
                            </select>

                        </div>
                        <div className="input-container">
                            <label>Description</label>
                            <input onChange={(e) => setDefect({ ...defect, [e.target.name]: e.target.value })}
                                name="DefectDescription" style={{ height: "200px" }}
                                type="text" placeholder="Enter your defect description" required />

                        </div>
                        <div className="input-container">
                            <label>Priority</label>
                            <select name="DefectPriority" onChange={(e) => setDefect({ ...defect, [e.target.name]: e.target.value })}>
                                <option>select priority</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>

                        </div>
                        <div className="button-container">
                            <input type="submit" onClick={(e) => submitHandler(e)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDefect