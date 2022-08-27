import React, {SyntheticEvent, useEffect, useState} from 'react'
import Header from "../components/Header";
import Cards from "../components/Cards";
import {UserDto} from "../classes/user.dto";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';


const EditCard = () => {
    const[cardsEdit, setCardsEdit] = useState([]);
    const  { id }  = useParams();
    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');

    const UpdateCardsEdit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
        title,
        content,
    }
            const res = await axios.put(`http://localhost:8080/diary/${id}`,data,{withCredentials: true});
            if (res.status === 200) {
                console.log(res.data);
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
                    <input placeholder={cardsEdit.title} onChange={(e) => setTitle(e.target.value)}/>
                    <div className="mb-3 mt-3">
                        <label htmlFor="comment">Diary content:</label>
                        {/* @ts-ignore */}
                        <textarea className="form-control"  id="comment" name="text" rows="15" placeholder={cardsEdit.content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div style={{display: 'flex', columnGap: '10px'}}>
                        {/* @ts-ignore */}
                         <button onClick={UpdateCardsEdit} type="submit" className="btn btn-primary" data-dismiss="modal">UPDATE</button>
                        <button onClick={() => navigate(`../diary/delete/${id}`) } type="button" className="btn btn-primary" data-dismiss="modal">DELETE</button>
                        <button onClick={() => navigate(`../home/`) } type="button" className="btn btn-primary" data-dismiss="modal" >GO HOME</button>
                    </div>
                </form>


            </div>

        </>
    );
}

export default EditCard;