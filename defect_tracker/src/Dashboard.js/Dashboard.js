import React, { useState, useEffect } from 'react'
import { useAsyncError } from 'react-router-dom';
import AuthenticationService from '../Service/Auth.service';
import DefectService from '../Service/Defect.service';
import './Dashboard.css';

const Dashboard = () => {
    const [defect, setDefect] = useState([]);
    const [defectCount, setDefectCount] = useState(0);

    const [filterDefect, setFilterDefect] = useState([]);

    const userId = AuthenticationService.getLoggedInUserId();

    const fetchData = async () => {
        const data = await DefectService.getAlldefect();

        let serviceDefect = [];
        // setDefect(data);
        let count = 0
        if (userId == "1003") {
            data.forEach((element) => {
                count = count + 1;
                serviceDefect.push(element);
            });
        }
        else {
            data.forEach((element) => {
                if (element.UserIdDefect === userId) {
                    count = count + 1;
                    serviceDefect.push(element);
                }
            });
        }
        console.log(serviceDefect);
        setDefectCount(count);
        setDefect(serviceDefect);
        setFilterDefect(serviceDefect);
        console.log(filterDefect);
    }

    const priorityChangeHandler = (e) => {
        let serviceDefect = [];
        let count = 0;
        if (e.target.value == "All") {
            defect.map((d) => {
                count = count + 1;
                serviceDefect.push(d);
            });
        }
        else {
            defect.map((d) => {
                if (d.DefectPriority == e.target.value) {
                    count = count + 1;
                    serviceDefect.push(d);
                }
            });
        }
        console.log(serviceDefect);
        setFilterDefect(serviceDefect);
        setDefectCount(count);
    }

    const categoryChangeHandler = (e) => {
        let serviceDefect = [];
        let count = 0;
        if (e.target.value == "All") {
            defect.map((d) => {
                count = count + 1;
                serviceDefect.push(d);
            });
        }
        else {
            defect.map((d) => {
                if (d.DefectCategory == e.target.value) {
                    count = count + 1;
                    serviceDefect.push(d);
                }
            });
        }
        console.log(serviceDefect);
        setFilterDefect(serviceDefect);
        setDefectCount(count);
    }

    const closeClickHandler = async(e, d) => {
        await DefectService.updateDefect(d);
        fetchData();
    }

    const deleteClickHandler = async(e, d) => {
        await DefectService.deleteDefect(d);
        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div style={{ display: "grid", justifyContent: "center" }}>
                <h3>Defects Details</h3>
                <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "100px" }}>Priority</p>
                    <select onChange={(e) => priorityChangeHandler(e)}>
                        <option value="All">Select Priority to filter</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "80px" }}>Category</p>
                    <select onChange={(e) => categoryChangeHandler(e)}>
                        <option value="All">All</option>
                        <option value="UI">UI</option>
                        <option value="Functional">Functional</option>
                        <option value="Change Request">Change Request</option>
                    </select>
                </div>
                <span style={{ color: "red" }}>Search Details : {defectCount}</span>
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
                        {filterDefect.map((d) => {
                            if (d.UserIdDefect === userId || userId === "1003" ) {

                                return <tr>
                                    <td>{d.DefectCategory}</td>
                                    <td>{d.DefectDescription}</td>
                                    <td>{d.DefectPriority}</td>
                                    <td>{d.Status}</td>
                                    {userId == "1003" ? <td><button onClick={(e) => closeClickHandler(e, d)} type="button">{d.Status=="Open"?"Close":"No Action Pending"}</button></td> :
                                        <td><button onClick={(e) => deleteClickHandler(e, d)} type="button">{d.Status=="Open"?"Delete":"Completed"}</button></td>}

                                </tr>
                            }
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard