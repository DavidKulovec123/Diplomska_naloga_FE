import React, { useState } from 'react'
import Header from "../components/Header";
import Cards from "../components/Cards";
import {UserDto} from "../classes/user.dto";
import {useNavigate} from "react-router-dom";


const Diarys = ({user}:{user: UserDto}) => {
    const navigate = useNavigate()

    return (
        <>
            <Header />


            <div className= "container">
            <h1>Tvoji podatki</h1>
            <h3>Ime: {user.first_name}</h3>
            <h3>Priimek: {user.last_name}</h3>
            <h3>Email: {user.email}</h3>

            </div>





            <div className="container">
                <div className="row ">
                    <div className="col-sm-3 " style={{marginTop: "10px"}} >
                        <div className="card text-center ">
                            <div className="card-header  bg-success border-0">
                                &nbsp;
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">&nbsp;</h5>
                                <p className="card-text">&nbsp;</p>
                                <button onClick={() => navigate("/diary") } type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">ADD A DIARY</button>
                            </div>
                            <div className="card-footer text-muted card-header bg-success border-0">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                        <Cards />

                    </div>

                    </div>



        </>
    );
}

export default Diarys;