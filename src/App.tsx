import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Diarys from "./Pages/Diarys";
import ExamsIDE from "./Pages/ExamsIDE";

import Wrapper from "./components/Wrapper";
import FirstPage from "./Pages/FirstPage";
import EditCard from "./Pages/EditCard";
import DeleteDiary from "./Pages/DeleteDiary";
import CreateDiary from "./Pages/CreateDiary";
import CreateTasks from "./Pages/CreateTasks";
import {UserDto} from "./classes/user.dto";
import axios from "axios";
import Home from "./Pages/Home";
import Fitness from "./Pages/Fitness";
import SessionEdit from "./Pages/SessionEdit";
import SessionCreate from "./Pages/SessionCreate";
import Exams from "./Pages/Exams";
import CreateWorkout from "./Pages/CreateWorkout";
import DeleteTasks from "./Pages/DeleteTasks";
import EditTask from "./Pages/EditTask";
import Classes from "./Pages/Classes";
import ClassCode from "./Pages/ClassCode";
import ClassExams from "./Pages/ClassExams";
import LeaveClass from "./Pages/LeaveClass";
import CreateExercise from "./Pages/CreateExercise";
import ClassExamsIDE from "./Pages/ClassExamsIDE";
import DeleteClassTasks from "./Pages/DeleteClassExams";
import EditClassTask from "./Pages/EditClassTask";
import WorkTasks from "./Pages/WorkTasks";
import EditWorkTask from "./Pages/EditWorkTask";
import WorkTasksIDE from "./Pages/WorkTasksIDE";
import DeleteWorkTasks from "./Pages/DeleteWorkTasks";

function App() {
    const [user,setUser] = useState<UserDto>(new UserDto(0,'','',''));

    const currentUser = async () => {
        try {
            const res = await axios.get('http://localhost:8080/users/profile',
                {withCredentials: true});

            if (res.status == 200) {
                setUser(res.data);
            }
        }
        catch (e) {

        }
    }

    useEffect(() => {
        currentUser();
    },[]);

    return (
      <Wrapper>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<FirstPage />} />
                  <Route path={'/login'} element={<Login />} />
                  <Route path={'/register'} element={<Register />} />
                  <Route path={'/Diarys'} element={<Diarys user={user}/>} />
                  <Route path={'/diary/:id'} element={<EditCard />} />
                  <Route path={'/diary/delete/:id'} element={<DeleteDiary />} />
                  <Route path={'/exams/delete/:id'} element={<DeleteTasks />} />
                  <Route path={'/WorkTasks/delete/:id'} element={<DeleteWorkTasks />} />
                  <Route path={'/diary'} element={<CreateDiary />} />
                  <Route path={'/tasks'} element={<CreateTasks />} />
                  <Route path={'/home'} element={<Home />} />
                  <Route path={'/fitness'} element={<Fitness />} />
                  <Route path={'/session/:id'} element={<SessionEdit />} />
                  <Route path={'/sessionCreate'} element={<SessionCreate />} />
                  <Route path={'/Exams'} element={<Exams />} />
                  <Route path={'/exams/:date'} element={<ExamsIDE />} />
                  <Route path={'/WorkTasks/:date'} element={<WorkTasksIDE />} />
                  <Route path={'/CreateWorkout'} element={<CreateWorkout />} />
                  <Route path={'/CreateExercise'} element={<CreateExercise />} />
                  <Route path={'/exams'} element={<Exams />} />
                  <Route path={'/WorkTasks'} element={<WorkTasks />} />
                  <Route path={'/createtask'} element={<CreateTasks />} />
                  <Route path={'/editTask/:id'} element={<EditTask />} />
                  <Route path={'/editWorkTask/:id'} element={<EditWorkTask />} />
                  <Route path={'/editClassTask/:id'} element={<EditClassTask />} />
                  <Route path={'/classes'} element={<Classes />} />
                  <Route path={'/classes/:id'} element={<ClassCode />} />
                  <Route path={'/classExams/:id'} element={<ClassExams />} />
                  <Route path={'/classExams/leave/:id'} element={<LeaveClass />} />
                  <Route path={'/classExams/getClass:id/:date'} element={<ClassExamsIDE />} />
                  <Route path={'/classExams/delete/:id'} element={<DeleteClassTasks />} />
              </Routes>
          </BrowserRouter>
      </Wrapper>
  );
}
//
//
export default App;
