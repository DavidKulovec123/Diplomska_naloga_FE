import React, {SyntheticEvent, useEffect, useState} from 'react'
import axios from "axios";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import Header from "../components/Header";

const CreateWorkout = () => {
    const navigate = useNavigate();
    const[error, setError] = useState('');
    const[name, setName] = useState('');
    const[ExercisesSelected,setExercisesSelected] = useState<string | null>(null);
    const[exercises,setExercises] = useState([]);

    const getExercises = async () => {
        try {
            const req = await axios.get('http://localhost:8080/exercises',{withCredentials:true});
            setExercises(req.data);
        }
        catch (e){
            console.log(e)
            setError('Juuuuu neki ni vredo')
        }
    }

    useEffect(() => {
        getExercises();
    }, []);


    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const dataWorkout = {
            workout_name: name,
            exercise_id: ExercisesSelected,
        }

        console.log(dataWorkout);

        try {
            const res = await axios.post('http://localhost:8080/workouts',dataWorkout ,{withCredentials:true});
            if(res.status === 201) {
                navigate('/fitness')
            }
        } catch (e) {
            setError('Error description')
        }
    }

    return (
        <>
            <Header />
            <div className={"container "}>
                <h2>Trening</h2>
                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <br />
                    {error.length>0 && <h1>{error}</h1>}
                    <br />
                    <div className="form-floating">
                        <select className="form-control" id="floatingSelect"
                                onChange={(e: any) => setExercisesSelected(e.target.value)}>
                            <option></option>
                            {exercises.map((exercise:any, i) => (
                                <option value={exercise.id as string} key={i}>{exercise.name}</option>
                            ))}
                        </select>
                        <label htmlFor="floatingSelect">Izberi predmet</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                               placeholder="naslov"
                               onChange={(e) => setName(e.target.value)}/>
                        <label htmlFor="floatingInput">Ime</label>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
                </form>
            </div>
        </>
    );
}

export default CreateWorkout;