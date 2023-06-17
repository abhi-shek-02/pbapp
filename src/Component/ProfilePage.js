import { useParams } from "react-router-dom";
import React from 'react';
import './ProfilePage.css'
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
    const { id } = useParams();
    const location = useLocation();
    const state = location.state;
    console.log("mystate", state.first_name)

    return (
        <div className="main-container">
            <div className="main-card">
                <div className="main-card1">
                    <img src={state.avatar} alt="Error" className="img-fluid" />
                </div>
                <div className="main-card2">
                    <div className="main-card2-1">
                        <h1>Information</h1>
                    </div>
                    <div className="main-card2-2">
                        <ul>

                            <li>Name : {state.first_name} {state.last_name}</li>
                            <li>Email : {state.email}</li>
                            <li>Agent id : {state.id + 1}</li>
                        </ul>
                        <form action="/" >
                            <button class="button-63" >Go Back</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProfilePage;
