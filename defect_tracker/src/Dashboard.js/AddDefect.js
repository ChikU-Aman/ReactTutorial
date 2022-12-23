import React from 'react';
import './AddDefect.css';
const AddDefect = () => {
  return (
    <div className="app">
            <div className="login-form">
                <div className="title">Add Defect</div>
                <div className="form">
                    <div>
                        <div className="input-container">
                            <label>Defect Category </label>
                            <select>
                                <option>UI</option>
                                <option>Functional</option>
                                <option>Change Request</option>
                            </select>

                        </div>
                        <div className="input-container">
                            <label>Description</label>
                            <input style={{height:"200px"}} type="text" name="Description" placeholder="Enter your defect description" required />

                        </div>
                        <div className="input-container">
                            <label>Priority</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>

                        </div>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddDefect