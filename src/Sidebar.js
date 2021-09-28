import React from 'react'
import "./Sidebar.css";
import {Link} from "react-router-dom"
function Sidebar() {
    
    return (
        <div className="navbar">
            <div className="logo">
            <img src="https://neumannx.co/wp-content/uploads/2017/01/img-portfolio-dollarbird.png" alt="logo"/>
                Company Logo
            </div>
            <div>
                <ul className="bar">
                    <Link to="Role"><li >Role Master</li></Link>
                    <Link to="Country"><li >Country Master</li></Link>
                    <Link to="Categorey"><li >Categorey Master</li></Link>            
                   <Link to="/"> <li className="li">Machine Master</li> </Link>       
                    <Link to="Ticket"> <li >Ticket Categorey Master</li></Link>
                  <Link to="Zone">  <li >Zone Categorey</li></Link>
                   <Link to="Leveis"> <li >Leveis Master</li></Link>
                   <Link to="License"> <li >License Master</li></Link>
                   <Link to="User"><li >User Master</li></Link>
                   <Link to="General"><li >General </li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
