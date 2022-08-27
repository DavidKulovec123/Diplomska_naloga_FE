import React, {SyntheticEvent, useEffect, useState} from 'react'
import Header from "../components/Header";
import Cards from "../components/Cards";
import {UserDto} from "../classes/user.dto";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';


const SessionEdit = () => {
    const[cardsEdit, setCardsEdit] = useState([]);
    const[cardsUpdate,setCardsUpdate] = useState([]);
    const  {id}  = useParams();
    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');

    const UpdateCardsEdit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            title,
            content,
        }
        const res = await axios.put(`http://localhost:8080/diary/${id}`,data);
        if (res.status === 200) {
            console.log(res.data);
            setCardsUpdate(res.data);
        }

    }

    const loadCardsEdit = async () => {
        const res = await axios.get(`http://localhost:8080/diary/${id}`,{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
            setCardsEdit(res.data);
        }
    }

    // get diary data
    // axios.get(id) -> diary za tt id

    useEffect(()=>{
        loadCardsEdit();
    },[]);

    return (
        <>
            <Header />
            {/* @ts-ignore */}
            <div className="container mt-3">
                <form action="#" onSubmit={UpdateCardsEdit}>
                    {/* @ts-ignore */}


                    <div style={{display: 'flex', columnGap: '10px'}}>
                        {/* @ts-ignore */}
                        <button onClick={UpdateCardsEdit} type="submit" className="btn btn-white shadow-lg" data-dismiss="modal">UPDATE</button>
                        <button onClick={() => navigate(`../diary/delete/${id}`) } type="button" className="btn btn-white shadow-lg" data-dismiss="modal">DELETE</button>
                        <button onClick={() => navigate(`../home/`) } type="button" className="btn btn-white shadow-lg" data-dismiss="modal" >GO HOME</button>
                    </div>
                </form>
 s

            </div>

        </>
    );
}

export default SessionEdit;