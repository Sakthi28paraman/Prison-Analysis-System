import React from "react";
import "../App.css"

export default function Form(){
    const createpage = () =>{
        window.location.replace("http://localhost:3000/create")
    }
    const updatepage = () =>{
        window.location.replace("http://locahost:3000/update")
    }
    // const navigate  = useNavigate();
    // const navigatetocreate = () =>{
    //     navigate('/Create')
    // };
    return(
                <div className="creatediv" >
                    <button className="createb1" variant="contained" onClick={createpage}>Create</button>
                <br />
                <button className="readb1">Read</button>
                <br />
                <button className="updateb1" variant="contained" onClick={updatepage} >Update</button>
                <br /><button className="deleteb1">Delete</button>
                </div>
    )
}