import React, {useEffect, useState} from "react";
import axios from "axios";
import ClassCard from "./ClassCard";


const ClassCards = () => {
    const[cards, setCards] = useState([]);

    const loadCards = async () => {
        const res = await axios.get(`http://localhost:8080/classes`,{withCredentials: true});
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
                {cards.map((card , i,) => {

                    return <ClassCard key={i} cardData={card} />;
                })
                }

            </>
        );
    }

    return (
        <h1>Ni Razredov</h1>
    );


}

export default ClassCards;