import { useNavigate } from "react-router-dom";
import AuthenticationService from "./Auth.service";


const DefectService = {
    async getAlldefect() {
        const responseData = await fetch("http://localhost:5000/Defect");
        const defects = await responseData.json();

        return defects;
    },
    async addDefect(defect) {
        console.log(defect)
        await fetch('http://localhost:5000/Defect', {
            method: 'POST',
            body: JSON.stringify(defect),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                return true;
            })
            .catch((err) => {
                console.log(err.message);
                return false;
            });
    },

    async updateDefect(d) {
        const requestOptions = {
            'method': 'PUT',
            'body': JSON.stringify({
                "DefectCategory": d.DefectCategory,
                "DefectPriority": d.DefectPriority,
                "UserIdDefect": d.UserIdDefect,
                "DefectDescription": d.DefectDescription,
                "Status": "Closed"
            }),
            'headers': { "Content-type": "application/json" }
        }

        const data = await fetch(`http://localhost:5000/Defect/${d.id}`, requestOptions);
        const response = await data.json();
    },

    async deleteDefect(d) {
        const data = await fetch(`http://localhost:5000/Defect/${d.id}`, { method: 'delete' })
        const response = await data.json();
    }
}

export default DefectService;