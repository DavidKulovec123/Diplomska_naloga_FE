import React, {SyntheticEvent, useEffect, useState} from 'react'
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
import axios from "axios";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import Moment from "moment";
import {forEach} from "react-bootstrap/ElementChildren";
import UsersInClassCards from "../components/UsersInClassCards";

const styleTextarea = {
    height:"100%",
}

const ClassExams = () => {
    const { id } = useParams();
    const [data, setData] = useState<any[]>([]);
    const [dataget, setDataGet] = useState<any[]>([]);
    const [user, setUser] = useState<any[]>([]);
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const myDate = Moment(value).format('DDMMYYYY');
    const[redirect,setRedirect] = useState(false);
    const[title, setClassTitle] = useState('');
    const[content, setClassContent] = useState('');
    const[location, setClassLocation] = useState('');
    const[date, setClassDate] = useState('');
    const[Room, setClassRoom] = useState('')
    const[Seat, setClassSeat] = useState('')

    const submit = async (event: any) => {
        event.preventDefault();

        const data = {
            title,
            content,
            date,
            location,
            Room,
            Seat,
        }

        console.log(data);


        const res = await axios.post(`http://localhost:8080/classExams/${id}`, data, { withCredentials: true } );
        console.log(res);
        if (res.status == 201) {
        }

    }

    const loadClassDates = async () => { // tule nisi meu with credential pa jih nucas met
        const res = await axios.get(`http://localhost:8080/classExams/${id}`,{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
            setDataGet(res.data)
        }
    }

    if (redirect) {
        window.location.reload();
    }

    const Leave = async (event: any) => { // sprobi če dela tk ko more
        event.preventDefault();
        try {
            await axios.patch(`http://localhost:8080/classExams/leave/${id}`, {},  {withCredentials: true});
        } catch(error) { console.log(error) }
    }

    useEffect(()=>{ loadClassDates(); },[]);

    return (
        <>
            <Header />

            <div className={"container shadow-lg "}>
                <h4>Člani</h4>
            <UsersInClassCards />
            </div>
            <br />
            <div className={"container shadow-lg "}>

                <FullCalendar
                    events={dataget}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    dateClick={(e:DateClickArg) => {
                        const myDate = Moment(e.date).format('DDMMYYYY')
                        navigate(`../classExams/getClass${id}/${myDate}`)
                    }}/>
                <br/>
            </div>
            <div className={"container shadow-lg col-lg-12"}>
                <br/>
                <form className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="naslov"
                               onChange={(e) => setClassTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Naslov</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                    <textarea className="form-control" id="floatingContent"
                              rows={8}
                              style={styleTextarea}
                              placeholder="Vnesi vsebino"
                              onChange={(e)=>setClassContent(e.target.value)}>
                    </textarea>
                        <label htmlFor="floatingContent">Vsebina</label>
                    </div>
                    <br/>


                    <input id="date" className="form-control" type="date" onChange={(e)=>setClassDate(e.target.value)}/>

                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="naslov"
                               onChange={(e) => setClassLocation(e.target.value)}/>
                        <label htmlFor="floatingInput">Lokacija</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="naslov"
                               onChange={(e) => setClassRoom(e.target.value)}/>
                        <label htmlFor="floatingInput">Soba</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="naslov"
                               onChange={(e) => setClassSeat(e.target.value)}/>
                        <label htmlFor="floatingInput">Sedež</label>
                    </div>
                    <br/>
                    <button onClick={(event: any) => submit(event)} className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
                </form>
                <br/>
            </div>
            <br/>
            <div className={"container"}>
                <button onClick={(event: any) => Leave(event)} type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">ZAPUSTI SKUPINO</button>

            </div>

        </>
    );
}

export default ClassExams;