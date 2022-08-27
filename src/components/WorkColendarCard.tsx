import React, {useState} from "react";
import Moment from 'moment';
import {useNavigate, useParams} from 'react-router-dom';

const WorkColendarCard = ({examData}:{examData:any}) => {
    const navigate = useNavigate();
    const [value, onChange] = useState();
    const mydate = Moment(value).format('DDMMYYYY');

    //const mydate = cardData.created_at.Moment().format('');
    return (

        <>
            <div className={"container"}>

                <div className="card shadow-lg">

                    <div className="card-body">
                        <h5 className="card-title">{examData.title}</h5>
                        <h6 className="card-text">{examData.content}</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Datum: {Moment(examData.date).format('DD.MM.YYYY ob HH:MM')}</li>
                        <li className="list-group-item">Lokacija: {examData.location}</li>

                    </ul>
                    <div className="card-body">
                        <button onClick={() => navigate(`../WorkTasks/delete/${examData.id}`) } type="button" className="btn btn-white shadow-lg" data-dismiss="modal">DELETE</button>|
                        <button onClick={() => navigate(`../editWorkTask/${examData.id}`) } type="button" className="btn btn-white shadow-lg" data-dismiss="modal">EDIT</button>



                    </div>
                </div>
                <br />
            </div>




        </>
    )
}

export default WorkColendarCard;