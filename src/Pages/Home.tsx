import React, { useState } from 'react'
import Header from "../components/Header";
import Cards from "../components/Cards";
import {UserDto} from "../classes/user.dto";
import {useNavigate} from "react-router-dom";



const Home = () => {

    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="container">
            <div className="row ">
            <div className="col-sm-3 " style={{marginTop: "10px"}}>
                <div className="card text-center">
                    <div className="card-header border-0 bg-white">
                        &nbsp;
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">&nbsp;</h5>
                        <p className="card-text">&nbsp;</p>
                        <button onClick={() => navigate("/diarys") } type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">DIARYS</button>

                    </div>
                    <div className="card-footer text-muted border-0 bg-white">
                        &nbsp;
                    </div>
                </div>
            </div>


                <div className="col-sm-3 " style={{marginTop: "10px"}}>
                    <div className="card text-center">
                        <div className="card-header border-0 bg-white">
                            &nbsp;
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">&nbsp;</h5>
                            <p className="card-text">&nbsp;</p>
                            <button onClick={() => navigate("/School") } type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">SCHOOL</button>

                        </div>
                        <div className="card-footer text-muted border-0 bg-white">
                            &nbsp;
                        </div>
                    </div>
                </div>


                <div className="col-sm-3 " style={{marginTop: "10px"}}>
                    <div className="card text-center">
                        <div className="card-header border-0 bg-white">
                            &nbsp;
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">&nbsp;</h5>
                            <p className="card-text">&nbsp;</p>
                            <button onClick={() => navigate("/Work") } type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">WORK</button>

                        </div>
                        <div className="card-footer text-muted border-0 bg-white">
                            &nbsp;
                        </div>
                    </div>
                </div>


                <div className="col-sm-3 " style={{marginTop: "10px"}}>
                    <div className="card text-center">
                        <div className="card-header border-0 bg-white">
                            &nbsp;
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">&nbsp;</h5>
                            <p className="card-text">&nbsp;</p>
                            <button onClick={() => navigate("/Fitness") } type="button" className="btn btn-white shadow-lg p-3 mb-5 bg-body rounded border border-dark" data-dismiss="modal">FITNESS</button>

                        </div>
                        <div className="card-footer text-muted border-0 bg-white">
                            &nbsp;
                        </div>
                    </div>
                </div>



            </div>
            </div>
        </>
    );
}

export default Home;