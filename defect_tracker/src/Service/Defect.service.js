const DefectService ={
    async getAlldefect(){
        const responseData = await fetch("http://localhost:5000/Defect");
        const defects = await responseData.json();
        return defects;
    }
}

export default DefectService;