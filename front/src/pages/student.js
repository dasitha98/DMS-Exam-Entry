import React, {useEffect, useState} from 'react';
import { form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { CreateStudent } from "../actions/students";
import {Check} from "../pages/Validation/validation.js"
import { useNavigate, useParams } from "react-router-dom";

export default function Student(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const listDetails = useSelector((state) => state);
    const [userDetails, setUserDetails] = useState({stno: '', stname: '', sttel: ''});
    const handleChange = (e) => setUserDetails({ ...userDetails, [e.target.id]: e.target.value });

    const handleForm = (e) => {
        e.preventDefault()
        const Empty = Check(userDetails)
        if(Empty){
          console.log("Fields are empty");
        }else{
            const formData = new FormData()
            formData.append("StNo", userDetails.stno);
            formData.append("StName", userDetails.stname);
            formData.append("StTel", userDetails.sttel);
    
            console.log(userDetails.stno);
            console.log(userDetails.stname);
            console.log(userDetails.sttel);
    
            dispatch(CreateStudent(formData));
            navigate(`/`);
            window.location.reload();
        }


  
      };

    return(


        <div class="container">
            <div class="row mt-5">
                <div class="col"></div>
                <div class="col-lg-4"><h2 style={{"color":"blue"}}>Student Registration Form</h2></div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col-lg-8">
                    <div class="card p-3 mt-5">
                        <form onSubmit={handleForm}>
                            <div class="mb-3">
                                <label for="stno" class="form-label">student no</label>
                                <input type="text" onChange={handleChange} class="form-control" id="stno" name="stno" aria-describedby="stnoHelp" required/>
                            </div>
                            <div class="mb-3">
                                <label for="stname" class="form-label">student name</label>
                                <input type="text" onChange={handleChange} class="form-control" id="stname" name="stname" aria-describedby="stnameHelp" required/>
                            </div>
                            <div class="mb-3">
                                <label for="sttel" class="form-label">student Contact No.</label>
                                <input type="text" onChange={handleChange} class="form-control" id="sttel" name="sttel" aria-describedby="sttelHelp" required/>
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