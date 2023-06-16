
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import ProfileCard from './ProfileCard';
import './Home.css'
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
    const [mydata, setmydata] = useState([]);
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1&per_page=5')
            .then((response) => {
                setmydata(response.data.data);
            }).catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(mydata);

    return (
        <div className="cont-news">
            <div className="news-box">
                {
                    mydata?.map((item, i) => {
                        console.log(item.id)
                        return (
                            <Link to={`/profile/${i}`} key={i}>
                                <ProfileCard
                                    last_name={item.last_name}
                                    first_name={item.first_name}
                                    email={item.email}
                                    avatar={item?.avatar}
                                />
                            </Link>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home



