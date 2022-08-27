import React, {SyntheticEvent, useEffect, useState} from 'react'
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import Moment from "moment";
import Cards from "../components/Cards";
import ClassCards from "../components/ClassCards";

const styleTextarea = {
    height:"100%",
}

const Exams = () => {
    const [data, setData] = useState<any[]>([]);
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const myDate = Moment(value).format('DDMMYYYY');
    const[redirect,setRedirect] = useState(false);


    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[location, setLocation] = useState('');
    const[date, setDate] = useState('');
    const[Room, setRoom] = useState('')
    const[Seat, setSeat] = useState('');

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            content,
            location,
            date,
            Room,
            Seat,
        }

        console.log(data);

        const res = await axios.post('http://localhost:8080/exams',data,{withCredentials:true});

        if (res.status == 201) {
            setRedirect(true);
        }

    }



    const loadDates = async () => {
        const res = await axios.get('http://localhost:8080/exams/',{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data)
        }
    }

    useEffect(()=>{
        loadDates();
    },[]);


    if (redirect) {
        return <Navigate to='/home' />;
    }




    return (
        <>
            <Header />


            <div className="container row">

                    <ClassCards />


            </div>



        </>
    );
}

export default Exams;