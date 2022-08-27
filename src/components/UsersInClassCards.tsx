import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import UsersInClassCard from "./UsersInClassCard";

const UsersInClassCards = () => {
    const[cards, setCards] = useState([]);
    const { id } = useParams()

    const loadCards = async () => {
        const res = await axios.get(`http://localhost:8080/classExams/getall/${id}`,{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data)
            setCards(res.data);
        }
    }

    useEffect(()=>{
        loadCards();
    },[]);


    if(cards.length>0) {
        return (
            <>
                {cards.map((card , i,) => {
                    console.log(card);
                    return <UsersInClassCard key={i} cardData={card} />;
                })
                }

            </>
        );
    }
    return (
        <h1>Ni objav</h1>
    );




}

export default UsersInClassCards;