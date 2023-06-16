import React from 'react'
import './ProfileCard.css'
import { SocialIcon } from 'react-social-icons';



const ProfileCard = ({ first_name, last_name, email, avatar }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img src={avatar} alt="" className="img-fluid" />
                        </div>
                        <div className="team-content">
                            <h3 className="name">{first_name}</h3>
                            <h4 className="title">{last_name}</h4>
                        </div>
                        <ul className="social">
                            <li><SocialIcon  className="fa" url="https://twitter.com" /></li>
                            <li><SocialIcon  className="fa" url="https://facebook.com" /> </li>
                            <li><SocialIcon className="fa" url="https://www.upwork.com" />  </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
