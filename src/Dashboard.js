import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddIcon from '@mui/icons-material/Add';
import "./Dashboard.css"
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="header">
                <h1>Dashboard</h1>
                <div className="num">
                <NotificationsIcon className="noti"/>
                    <AccountCircleIcon className="avtar"/>
                   
                    <p>XXXXXXXX</p>
                </div>
               
            </div>
            <div className="card">
                <div className="card1">
                    <p>Remote Connect</p>
                    <CoronavirusIcon/>
                </div>
                <div className="card1">
                    <p>Licenses</p>
                    <ContactMailIcon/>
                </div>
                <div className="card1">
                    <p>Tech Support</p>
                    <AccountBoxIcon/>
                </div>
                <div className="card1">
                    <p>Setting</p>
                    <SettingsIcon/>
                </div>

                </div>
                <div className="main">
                    <div className="main_card">
                        <img src="https://cdn.shopify.com/s/files/1/0525/5276/1502/products/tr-102-blue_1__1.jpg?v=1610634502" alt="img"/>
                        <div className="icons">
                            <InsertDriveFileIcon/>
                            <InsertDriveFileIcon/>
                            <InsertDriveFileIcon/>
                            <AddIcon className="add"/>
                        </div>
                    </div>
                    <div className="details">
                        <div className="nav1">
                            <h2>25KN_NANO_LAB</h2>
                            <button> View</button>
                        </div>
                        <h3>Master Details</h3>
                    
                    <div className="Details">
                    <div>
                        <p>Machine Name -</p>
                        <p>Model No -</p>
                        <p>Customer Name -</p>
                        <p> Country -</p>
                        <p>Zone -</p>
                        <p>Category -</p>
                        <p>Warrenty Status -</p>
                        <p>Assigned Engineer</p>
                        <p>Warrenty Start and End Date</p>
                    </div>
                    <div>
                    <h5>25KN_NANO_LAB -</h5>
                        <h5>-</h5>
                        <h5>-</h5>
                        <h5> India</h5>
                        <h5>South</h5>
                        <h5>25kN</h5>
                        <h5>Not Installed</h5>
                        <h5>User 1</h5>
                        <h5>-</h5>
                       
                    </div>
                    </div>
                    <div className="div">
                        <p>Assign Engineer</p>
                        <p>Installation</p>
                        <p>Update Warrenty</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Dashboard
