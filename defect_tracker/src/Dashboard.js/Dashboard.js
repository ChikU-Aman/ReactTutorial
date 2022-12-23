import React, { useState, useEffect } from 'react'
import DefectService from '../Service/Defect.service';
import './Dashboard.css';

const Dashboard = () => {
    const [defect, setDefect] = useState([]);
    const [defectCount,setDefectCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            let defects = await DefectService.getAlldefect();
            await setDefect(...defect, defects);
            setDefectCount(defects.length);
        }
        fetchData();
    });

    return (
        <div>
            <div style={{display:"grid",justifyContent:"center"}}>
                <h3>Defects Details</h3>
                <div style={{display:"flex"}}>
                    <p style={{marginRight:"100px"}}>Priority</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{marginRight:"80px"}}>Category</p>
                    <select>
                        <option>All</option>
                        <option>UI</option>
                        <option>Functional</option>
                        <option>Change Request</option>
                    </select>
                </div>
                <span style={{color:"red"}}>Search Details : {defectCount}</span>
            </div>
            <div className="appDashboard">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{defect.DefectCategory}</td>
                            <td>{defect.DefectDescription}</td>
                            <td>{defect.DefectPriority}</td>
                            <td>{defect.Status}</td>
                            <td>close defect</td>
                        </tr>
                        <tr>
                            <td>{defect.DefectCategory}</td>
                            <td>{defect.DefectDescription}</td>
                            <td>{defect.DefectPriority}</td>
                            <td>{defect.Status}</td>
                            <td>close defect</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard