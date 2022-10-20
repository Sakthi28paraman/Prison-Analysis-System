import React from "react";
import './create.css'
// import {Routes,Route,useNavigate} from 'react-router-dom'

export default function Create(){

//     const navigate  = useNavigate();
//     const navigatetocreate = () =>{
//         navigate('/Create')
//     };
    const updateprison = () =>{
        window.location.replace("http://localhost:3000/updateprison")
    }
    const updateprisoner = () =>{
        window.location.replace("http://localhost:3000/updateprisoner")
    }
    const updatevisitor = () =>{
        window.location.replace("http://localhost:3000/updatevisitor")
    }
    const updateguard = () =>{
        window.location.replace("http://localhost:3000/updateguard")
    }
    const updatepunish = () =>{
        window.location.replace("http://localhost:3000/updatepunishment")
    }
    const updateparole = () =>{
        window.location.replace("http://localhost:3000/updateparole")
    }
    return(
        <div className="createPage">
            <br />
            <div className = "create3">
                            <h3>Create Page</h3>
            </div>
                <div className = "create2">
                        <button className="prisonerb1" variant = "contained" onClick={updateprisoner}>Prisoner</button>
                     <br />
                     <button className="prisonb1" variant = "contained" onClick={updateprison}>Prison</button>
                     <br />
                     <button className="visitorb1" variant = "contained" onClick={updatevisitor}>Visitor</button>
                    <br />
                    <button className="guardb1" variant = "contained" onClick={updateguard}>Guard</button>
                     <br /> 
                     <button className="punishmentb1" variant = "contained" onClick={updatepunish}>Punishment</button>
                     <br />
                     <button className="paroleb1" variant = "contained" onClick={updateparole}>Parole</button>
                </div>

        </div>

    )
}