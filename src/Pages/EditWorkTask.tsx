import React, {SyntheticEvent, useEffect, useState} from 'react'
import Header from "../components/Header";
import Cards from "../components/Cards";
import {UserDto} from "../classes/user.dto";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';
import Moment from "moment";
import card from "../components/Card";
const styleTextarea = {
    height:"100%",
}

const EditWorkTask = () => {
    const[cardsEdit, setCardsEdit] = useState([]);
    const  {id}  = useParams();
    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[location, setLocation] = useState('');
    const[date, setDate] = useState('');


    const UpdateCardsEdit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            title,
            content,
            location,
            date,
        }

        console.log(data)
        const res = await axios.put(`http://localhost:8080/WorkTasks/${id}`,data,{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
        }

    }

    const loadCardsEdit = async () => {
        const res = await axios.get(`http://localhost:8080/WorkTasks/${id}`,{withCredentials: true});
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
            <div className={"container shadow-lg col-lg-12"}>
                <br/>
                <form onSubmit={UpdateCardsEdit} className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="naslov"
                               onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Naslov</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                    <textarea className="form-control" id="floatingContent"
                              rows={8}
                              style={styleTextarea}
                              placeholder="Vnesi vsebino"
                              onChange={(e)=>setContent(e.target.value)}>
                    </textarea>
                        <label htmlFor="floatingContent">Vsebina</label>
                    </div>
                    <br/>


                    <input id="date" className="form-control" type="date" onChange={(e)=>setDate(e.target.value)}/>

                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="naslov"
                               onChange={(e) => setLocation(e.target.value)}/>
                        <label htmlFor="floatingInput">Lokacija</label>
                    </div>

                    <br/>
                    <button type="submit" className="w-100 btn btn-lg btn-primary" >Shrani</button>
                </form>
                <br/>
            </div>

        </>
    );
}

export default EditWorkTask;