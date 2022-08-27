import React from "react";
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Card = ({cardData}:{cardData:any}) => {
    const navigate = useNavigate();
    const day = Moment(cardData.created_at).format('dddd')
    const mydate = Moment(cardData.created_at).format('DD.MM.YYYY');
    //const mydate = cardData.created_at.Moment().format('');
    return (

        <>


            <div className="col-sm-3 " style={{marginTop: "10px"}}>
            <div className="card text-center">
                <div className="card-header">
                   <b> NEKA OSEBA </b>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{cardData.title}</h5>
                    <p className="card-text">{cardData.content}</p>
                    <button onClick={() => navigate(`../diary/${cardData.id}`) } type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">Open</button>
                </div>
                <div className="card-footer text-muted">
                    {day} : {mydate}
                </div>
            </div>
            </div>
        </>
    )
}

export default Card;