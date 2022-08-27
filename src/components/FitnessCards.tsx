import React, {useEffect, useState} from "react";
import axios from "axios";
import FitnessCard from "./FitnessCard";

const FitnessCards = () => {
    const[cards,setCards] = useState([]);

    const loadCards = async () => {
        const res = await axios.get('http://localhost:8080/Workouts',{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
            setCards(res.data);
        }
    }

    useEffect(()=>{
        loadCards();
    },[]);

    if(cards.length>0) {
        return (
            <>
                {cards.map((card , i,) => (<FitnessCard key={i} cardData={card} />))}
            </>
        );
    }

    return (
        <h1>Ni objav</h1>
    );


}

export default FitnessCards;