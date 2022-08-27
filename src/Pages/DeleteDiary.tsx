import React, { useEffect } from 'react'
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";



const DeleteCard = () => {

    const  {id}  = useParams();


    const deleteCardsEdit = async () => {
        const res = await axios.delete(`http://localhost:8080/diary/${id}`,{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
        }
    }





    useEffect(()=>{
        deleteCardsEdit();

    },[]);
    return (
        <>
            <Navigate to='/Diarys' />
        </>
    );
}

export default DeleteCard;