import React, { useEffect } from 'react'
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";



const DeleteTasks = () => {

    const  {id}  = useParams();


    const deleteTasks = async () => {
        const res = await axios.delete(`http://localhost:8080/WorkTasks/${id}`,{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
        }
    }




    useEffect(()=>{
        deleteTasks();

    },[]);
    return (
        <>
            <Navigate to='/WorkTasks' />
        </>
    );
}

export default DeleteTasks;