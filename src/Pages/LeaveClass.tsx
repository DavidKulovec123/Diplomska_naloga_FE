import React, { useEffect } from 'react'
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";



const LeaveClass = () => {

    const  {id}  = useParams();


    const Leave = async () => {
 await axios.put(`http://localhost:8080/classExams/leave/${id}`,{withCredentials: true});

    }




    useEffect(()=>{
        Leave();

    },[]);

    return (
        <>
            <Navigate to='/classes' />
        </>
    );
}

export default LeaveClass;