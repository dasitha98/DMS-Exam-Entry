import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { CreateSubject } from "../actions/subjects";
import { UpdateStudent, FetchStudent } from "../actions/students";
import Select from "react-select";
import {Check} from "../pages/Validation/validation.js"
import { useNavigate, useParams } from "react-router-dom";

export default function Subject(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const listDetails = useSelector((state) => state?.student.students);
    // console.log("listDetails",listDetails);

    useEffect(() => {
        dispatch(FetchStudent())
    },[]);

    
    const [userDetails, setUserDetails] = useState({SuName: '', SuGrade: '', SuMark: '', StNo: ''});
    const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.id]: e.target.value });

    const handleForm = (e) => {
        e.preventDefault()
        const Empty = Check(userDetails)
        if(Empty){
          console.log("Fields are empty");
        }else{
          const formData = new FormData()
          formData.append("SuName", userDetails.SuName);
          formData.append("SuGrade", userDetails.SuGrade);
          formData.append("SuMark", userDetails.SuMark);
          formData.append("StNo", userDetails.StNo);

          console.log(userDetails.SuName);
          console.log(userDetails.SuGrade);
          console.log(userDetails.SuMark);
          console.log(userDetails.StNo);

          dispatch(CreateSubject(formData));
          navigate(`/`);
        window.location.reload();
        }
      };


      
      const [newdata, setnewdata] = useState([]);

      useEffect(() => {
          
          axios.get('http://localhost:5000/api/student/getallstudent')
          .then
          (
              res => setnewdata(res.data)
          );
  
      },[setnewdata])

    //   console.log("newdata",newdata);


    const map = new Map([]);

      function Display(newdata){
        for(var i=0; i<newdata.length; i++){
            console.log("StNo",newdata[i]._id, "StName",newdata[i].StName);
            // hm.put(1, "A");

            map.set(newdata[i]._id,newdata[i].StName)

          };
      }


      useEffect(() => {
          
        Display(newdata)
        console.log("map",map);

    },[newdata])



    return(

        <div class="container">
            <div class="row mt-5">
                <div class="col"></div>
                <div class="col-lg-2"><h2 style={{"color":"blue"}}>Subject Form</h2></div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-lg-8">
                    <div class="card p-3 mt-5">
                    <form onSubmit={handleForm}>
                <div class="mb-3">
                    <label for="SuName" class="form-label">Subject Name</label>
                    <input type="text" onChange={handleChange} class="form-control" id="SuName" name="SuName" aria-describedby="SuNameHelp" required/>
                </div>
                <div class="mb-3">
                    <label for="SuGrade" class="form-label">Subject Grade</label>
                    <input type="text" onChange={handleChange} class="form-control" id="SuGrade" name="SuGrade" aria-describedby="SuGradeHelp" required/>
                </div>
                <div class="mb-3">
                    <label for="SuMark" class="form-label">Subject Mark</label>
                    <input type="text" onChange={handleChange} class="form-control" id="SuMark" name="SuMark" aria-describedby="SuMarkHelp" required/>
                </div>

                <div class="mb-3">
                    <label for="StNo" class="form-label">Student No.</label>
                    <input type="text" onChange={handleChange} class="form-control" id="StNo" name="StNo" aria-describedby="StNoHelp" required/>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary w-100">Submit</button>
                </div>
            </form>
                    </div>
                </div>
                <div class="col"></div>
            </div>

        </div>
    );
}