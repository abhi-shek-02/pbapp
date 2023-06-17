import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../Redux/slice/apidata'
import ProfileCard from './ProfileCard'
import { useState } from 'react'

const Newfile = () => {
    const [mydata, setmydata] = useState([])
    const user = useSelector((state) => state.Allapidata)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchdata())
        setmydata(user.data)
    }, [])
    console.log("data",user.data)
    

    return (
        <div>
            {user.isLoading && <div>Loading...</div>}
            {!user.isLoading && user.isError ? <div>Error : {user.isError}</div> : null}

            {!user.isLoading && !user.isError ? (

                <>
                    <div className="cont-news">
                        <div className="news-box">
                            {
                                user?.data?.data?.map((item, i) => {
                                    return (
                                        <ProfileCard
                                            last_name={item.last_name}
                                            first_name={item.first_name}
                                            email={item.email}
                                            avatar={item?.avatar}
                                        />

                                    )
                                })
                            }
                        </div>
                    </div>
                </>

            ) : null}
        </div>
    )
}

export default Newfile





