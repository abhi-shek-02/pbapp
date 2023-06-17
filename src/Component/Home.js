
import React, { useState } from 'react'
import Navbar from './Navbar';
import './Home.css'
import HomePage from './HomePage';
import Newfile from './Newfile';



const Home = () => {

    return (
        <>

            <div>
                <Navbar />
                <HomePage/>
                <h1 className='heading'>Our Agent</h1>
                <div className='line'></div>
                <Newfile />
            </div>
        </>
    )
}

export default Home
