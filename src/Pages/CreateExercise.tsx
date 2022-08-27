import React, {SyntheticEvent, useEffect, useState} from 'react'
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Header from "../components/Header";



const CreateExercise = () => {
    const[error, setError] = useState('');
    const navigate = useNavigate();

    const[name, setName] = useState('');
    const[sets, setSets] = useState('');
    const[reps, setReps] = useState('');





    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const dataExercises = {
            name,
            sets,
            reps,

        }

        try {
            const res = await axios.post('http://localhost:8080/exercises',dataExercises,{withCredentials:true});
            if(res.status === 201){
                navigate('/fitness')
            }
        } catch (e) {
            setError('Neki je šlo narobe ko dodajamo SESSION / košaro.')
        }
    }






    return (
        <>
            <Header />
            <div className={"container "}>
                <h2>Trening</h2>
                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <br />
                    <h1>{error}</h1>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="Name"
                               onChange={(e) => setName(e.target.value)}/>
                        <label htmlFor="floatingInput">Ime</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingInput"
                               placeholder="Sets"
                               onChange={(e) => setSets(e.target.value)}/>
                        <label htmlFor="floatingInput">Dvigi</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="floatingInput"
                               placeholder="Sets"
                               onChange={(e) => setReps(e.target.value)}/>
                        <label htmlFor="floatingInput">Ponovitve</label>
                    </div>
                    <br/>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
                </form>
            </div>
        </>
    );
}

export default CreateExercise;

