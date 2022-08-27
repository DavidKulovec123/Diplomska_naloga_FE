import React from "react";
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';
import card from "./Card";
import axios from "axios";

const FitnessCard = ({cardData}:{cardData:any}) => {
    const navigate = useNavigate();
    const day = Moment(cardData.created_at).format('dddd')
    const mydate = Moment(cardData.created_at).format('DD.MM.YYYY');

     const handleDelete = async () => {
        console.log('ondelete', cardData.id)
         try {
             await axios.delete(`http://localhost:8080/Workouts/${cardData.id}`,{withCredentials: true});
            window.location.reload()
        }
         catch (e) {
            console.log(e)
         }
    }

    return (
        <>
            <div className="col-lg-4 " style={{marginTop: "10px"}}>
                <div className="card text-center">
                    <div className="card-header">
                    </div>
                    <div className="card-body col-sm-12">
                        <div>
                            <div>
                                <p>{cardData.workout_name}</p>
                            </div>
                            <div>
                                {cardData.exercise && (
                                    <>
                                        <div style={{border: "1px solid black"}}>
                                            <p>Exercise: {cardData.exercise.name}</p>
                                            <p>Sets: {cardData.exercise.sets}</p>
                                            <p>Reps: {cardData.exercise.reps}</p>
                                            <p>Created at: {mydate}</p>
                                        </div>


                                    </>
                                )}
                            </div>
                        </div>
                        <br />
                    </div>
                    <button onClick={handleDelete} type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark">Delete</button>

                    <div className="card-footer text-muted">
                  </div>
                </div>
            </div>
        </>
    )
}

export default FitnessCard;