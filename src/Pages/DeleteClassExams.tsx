import React, { useEffect } from 'react'
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";



const DeleteClassTasks = () => {

    const  {id}  = useParams();


    const deleteTasks = async () => {
        const res = await axios.delete(`http://localhost:8080/ClassExams/${id}`,{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
        }
    }




    useEffect(()=>{
        deleteTasks();

    },[]);
    return (
        <>
            <Navigate to='/classes' />
        </>
    );
}

export default DeleteClassTasks;