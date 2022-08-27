import React, {SyntheticEvent, useEffect, useState} from 'react'
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import Moment from "moment";

const styleTextarea = {
    height:"100%",
}

const WorkTasks = () => {
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
        }

        console.log(data);

        const res = await axios.post('http://localhost:8080/WorkTasks',data,{withCredentials:true});

        if (res.status == 201) {
            setRedirect(true);
        }

    }



    const loadDates = async () => {
        const res = await axios.get('http://localhost:8080/WorkTasks/',{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data)
        }
    }

    useEffect(()=>{
        loadDates();
    },[]);


    if (redirect) {
        window.location.reload();
    }


    return (
        <>
            <Header />


            <div className={"container shadow-lg "}>
                <h1>Šlužba</h1>
                <hr />
                <FullCalendar
                    events={data}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    dateClick={(e:DateClickArg) => {
                        const myDate = Moment(e.date).format('DDMMYYYY')
                        navigate(`../WorkTasks/${myDate}`)
                    }}/>
                <br/>
            </div>

            <br/>

            <div className={"container shadow-lg col-lg-12"}>
                <br/>
                <form onSubmit={submit} className="form-signin w-100 m-auto">
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

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
                </form>
                <br/>
            </div>

        </>
    );
}

export default WorkTasks;