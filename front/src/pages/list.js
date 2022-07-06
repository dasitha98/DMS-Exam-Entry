// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import { Button, form } from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import { FetchSubjectDetails } from "../actions/subjects";
// import { UpdateStudent, FetchStudent } from "../actions/students";
// import Select from "react-select";
// import { Col, Container, Form, Row } from 'react-bootstrap';

// export default function List(){

//     const dispatch = useDispatch();

//     const listDetails = useSelector((state) => state?.student);
//     // console.log("listDetails",listDetails);
    
//     const [Detail, setDetail] = useState([]);

//     useEffect(() => {
//       setDetail(listDetails)
//     },[listDetails]);


//     useEffect(() => {
//       dispatch(FetchStudent())
//     },[]);
      
//     const [SearchProduct, setSearchProduct] = useState(false);
//     const [SearchName, setSearchName] = useState("");
//     console.log(SearchProduct[0]);

//     useEffect(() => {
//       const data2 = Detail.filter(function (mov) {
//         if (mov.StName.includes(SearchName)) {
//           // console.log(Detail);
//           return mov;
//         } else {
//           return null;
//         }
//       });
  
//       if (data2.length !== 0) {
//           setSearchProduct(data2);
//       }
//     }, [SearchName]);


//     const map = new Map([]);

//       function Display(newdata){
//         for(var i=0; i<newdata.length; i++){
//             console.log("StNo",newdata[i]._id, "StName",newdata[i].StName);
//             // hm.put(1, "A");

//             map.set(newdata[i]._id,newdata[i].StName)

//           };
//       }





//     return(
//       <Container className='product-containter' >
//       <h2>PRODUCTS</h2>
//       <Row className='mt-3 d-flex'>
//               <Col lg={8} md={12} sm={12} style={{ position: "relative" }}>
//                   <div class="serchWrapper">
//                       <div class="searchBar">
//                           <input id="searchInput"   type="text" name="searchInput" placeholder="Search..." onChange={(e) => setSearchName(e.target.value)}>
//                           </input>
                          

//                       </div>
//                   </div>
//               </Col>

          
//       </Row >




//       {/* products  */}
//       <div className='mt-5'>
//       <table class="table">
      
//           <tbody>
//               <tr>
//                   <th scope="col" className="t-head">PRODUCT NAME</th>
//                   <th scope="col" className="t-head">PRICE</th>
//                   <th scope="col" className="t-head"></th>

//               </tr>
//                     {((SearchProduct || Detail).map((detail) => (
//                               <tr valign="center" key={detail._id}>
//                                 {console.log("print",detail.StSubject)}
//                               <td valign="middle" className='text-secondary'>{detail.StNo}</td>

//                               <td valign="middle" className='text-secondary'>{detail.StName}</td>
//               </tr>
              
//                       )))}

//           </tbody>
//       </table>
//   </div>
// </Container>
//     );
// }


















import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button, form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { FetchSubjectDetails } from "../actions/students";
import { UpdateStudent, FetchAllStudent } from "../actions/students";
import Select from "react-select";
import { useNavigate } from "react-router-dom";


export default function List(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Detail, setDetail] = useState([0]);
    const listDetails = useSelector((state) => state?.student);

    useEffect(() => {
      setDetail(listDetails);
    },[listDetails]);

    function myFunction() {
      var name = document.getElementById('StNo').value;
      return name;
    }

    function Search(){
      dispatch(FetchSubjectDetails(myFunction()))
    }

    function Edit(){
      navigate(`/editstudent/${myFunction()}`);
    }

    function EditSubject(id){
      navigate(`/editsubject/${id}`);
    }

    function Addstudent(){
      navigate(`/student`);
    }

    function Addsubject(){
      navigate(`/subject`);
    }

    return(

        <div class="container">
          <div class="row my-5">
            <div class="col-lg">
            </div>
            <div class="col-lg-6">
            <div className='row'>
              <div className='d-flex justify-content-center'>
                <div className='col-lg-3'>
                  <h4 style={{color: "black"}}>Student No</h4>
                </div>
                <div className='col-lg-3'>
                  <input type="text" class="form-control" id="StNo" name="StNo" aria-describedby="SuMarkHelp"/>
                </div>
                <div className='col-lg-2 d-flex justify-content-center'>
                  <button type="submit" class="btn border" onClick={()=>Search()}>Search</button>
                </div>
                <div className='col-lg-8 d-flex justify-content-center'>
                  <button type="submit" class="btn border btn-sm" onClick={()=>Edit()}>Edit Student</button>
                  <button type="submit" class="btn border btn-sm" onClick={()=>Addstudent()}>Add Student</button>
                  <button type="submit" class="btn border btn-sm" onClick={()=>Addsubject()}>ADD Subject</button>
                </div>
              </div>
            </div>
            </div>
            <div class="col-lg">
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-lg">
            </div>
            <div class="col-lg-8">
                <table class="table table-bordered">
                    <thead class="thead-dark  btn-primary">
                        <tr>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Marks</th>
                          <th scope="col">Grade</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                      {Detail.length > 0 ? Detail.map((user) => (
                        <tr valign="center" key={user._id}>
                          <td valign="middle" className='text-secondary'>{user.SuName}</td>
                          <td valign="middle" className='text-secondary'>{user.SuMark}</td>
                          <td valign="middle" className='text-secondary'>{user.SuGrade}</td>
                          <td valign="middle" className='text-secondary'>
                            <button type="submit" class="btn border" onClick={()=>EditSubject(user._id)}>Edit</button>
                          </td>
                        </tr>
                      )) : 

                      <div>
                        <h4 className='d-flex justify-content-center mt-4'>Please enter valid student No before search and edit student</h4>
                      </div>
                      }
                                            
                    </tbody>
                </table>
            </div>
            <div class="col-lg">
            </div>
          </div>
          
        </div>
    );
}