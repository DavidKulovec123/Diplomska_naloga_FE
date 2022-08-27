import React, {SyntheticEvent, useEffect, useState} from 'react'
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
import axios from "axios";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import Moment from "moment";
import Cards from "../components/Cards";
import ClassCards from "../components/ClassCards";

const styleTextarea = {
    height:"100%",
}

const ClassCode = () => {


    const[redirect,setRedirect] = useState(false);
    const[code, setCode] = useState('');
    const {id} = useParams()
    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            class_code: code
        }



        const res = await axios.post(`http://localhost:8080/classes/${id}`, data ,{withCredentials:true});

        if (res.status == 201) {
            setRedirect(true);
        }

    }

    if (redirect) {
        return <Navigate to='/home' />;
    }
    return (
        <>
            <Header />

            <form onSubmit={submit} className="form-signin w-100 m-auto">
            <div className="container">

                <h1>VNESITE GESLO RAZREDA</h1>

                <input type="text" className="form-control" id="floatingInput"
                       placeholder="Vnesite kodo"
                       onChange={(e) => setCode(e.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit" >Shrani</button>
            </div>
            </form>


        </>
    );
}

export default ClassCode;