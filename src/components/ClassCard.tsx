import React, {useEffect, useState} from "react";
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

type UserInfo = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    class_status: string | null,
    razred: {
        id: number,
        class_name: string,
        class_code: string
    }
}

const ClassCard = ({cardData}:{cardData:any}) => {
    console.log(cardData)
    const navigate = useNavigate();
    const day = Moment(cardData.created_at).format('dddd')
    const mydate = Moment(cardData.created_at).format('DD.MM.YYYY');
    //const mydate = cardData.created_at.Moment().format('');

    const getUserData = async () => {
        const response = await axios.get('http://localhost:8080/classes/user', {withCredentials:true})
        const userInfo: UserInfo = response.data

        if(!userInfo.razred) { navigate(`../classes/${cardData.id}`)}
        else { navigate(`../ClassExams/${cardData.id}`) }
    }

     return (

        <>


            <div className="col-lg-3 " style={{marginTop: "10px"}}>
                <div className="card text-center">
                    <div className="card-header">
                        <b> {cardData.class_name} </b>
                    </div>
                    <div className="card-body">

                        <button onClick={() => { getUserData() } } type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">

JOIN
                        </button>
                    </div>
                    <div className="card-footer text-muted">
                        <h5 className="card-title">{cardData.class_code}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClassCard;