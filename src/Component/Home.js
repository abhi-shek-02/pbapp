
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import ProfileCard from './ProfileCard';
import './Home.css'
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import {useDispatchse,useSelector} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { fetchdata } from '../Redux/slice/apidata'
import Newfile from './Newfile';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    // console.log("state", state);
    const [mydata, setmydata] = useState([]);
    const [myreduxdata, setmyreduxdata] = useState([]);
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1&per_page=5')
            .then((response) => {
                setmydata(response.data.data);
            }).catch((error) => {
                console.error(error);
            });
    }, []);

    // if (state.Allapidata.isLoading === true) {
    //     return <h1>Loading...</h1>
    // }
    // else{
        
        // }
            // console.log(state.Allapidata);


    return (
        <>
            
                   <div> <Newfile/></div>
        </>
    )
}

export default Home

            {/* <button className="btn" onClick={e => dispatch(fetchdata())}>Show profiles</button> */}


// <div className="cont-news">
//                 <div className="news-box">
//                     {
//                         mydata?.map((item, i) => {
//                             {/* console.log(item.id) */ }
//                             return (
//                                 <Link to={`/profile/${i}`} key={i}>
//                                     <ProfileCard
//                                         last_name={item.last_name}
//                                         first_name={item.first_name}
//                                         email={item.email}
//                                         avatar={item?.avatar}
//                                     />
//                                 </Link>

//                             )
//                         })
//                     }
//                 </div>
//             </div>