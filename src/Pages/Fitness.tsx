import React, { useState } from 'react'
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";
import FitnessCards from "../components/FitnessCards";

const Fitness = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <div className="container">
                <Link to="/CreateWorkout" className="btn btn-white shadow-lg" data-dismiss="modal">CREATE NEW WORKOUT</Link>
            </div>
            <div className="container">
                <Link to="/CreateExercise" className="btn btn-white shadow-lg" data-dismiss="modal">CREATE NEW EXERcISE</Link>
            </div>
            <div className="container">
                <div className="row ">
                    <FitnessCards />
                </div>

            </div>

        </>
    );
}

export default Fitness;