import React, {SyntheticEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";

const styleTextarea = {
    height:"100%",
}

const SessionCreate = () => {
    const navigate = useNavigate()
    const[error, setError] = useState('');
    const[Session_name, setSession_name] = useState('');

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        if(Session_name.length > 0){
            navigate('/CreateWorkout', {state: {session_name: Session_name}})
        } else {
            setError('You need to insert session name first.')
        }
    }

    return (
        <>
            <Header />
            <h2>Session</h2>
            <div className="container ">
                {error.length > 0 && <h1>{error}</h1>}
                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="Telovadba"
                               onChange={(e) => setSession_name(e.target.value)}/>
                        <label htmlFor="floatingInput">Ime celotnega treninga</label>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-white shadow-lg" data-dismiss="modal">CREATE NEW</button>
                </form>
            </div>
        </>
    )
}

export default SessionCreate;