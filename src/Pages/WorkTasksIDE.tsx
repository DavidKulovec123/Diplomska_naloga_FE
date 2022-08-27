import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Moment from "moment";
import ColendarCard from "../components/ColendarCard";
import WorkColendarCard from "../components/WorkColendarCard";


const WorkTasksIDE = () => {
    const [value, onChange] = useState(new Date());
    const myDate = Moment(value).format('DDMMYYYY');
    const navigate = useNavigate();
    const [exams,setExams] = useState([]);
    const  { date }  = useParams();



    const loadExams = async () => {

        const res = await axios.get(`http://localhost:8080/WorkTasks/${date}`,{withCredentials: true});
        if (res.status === 200) {

            setExams(res.data);


        }


    }


    useEffect(()=>{
        loadExams();

    },[]);

    if(exams.length>0) {
        return (
            <>
                <Header />


                <br/>

                {exams.map((exam , i,) => {

                    return <WorkColendarCard key={i} examData={exam} />;
                })
                }

            </>

        );

    }

    else {
        return (

            <div>

                <Header />




            </div>


        );

    }

}

export default WorkTasksIDE;