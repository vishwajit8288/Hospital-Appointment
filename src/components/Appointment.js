import React, { useState } from 'react';
import doctor from '../doctor.png'
import axios from 'axios';

const AppointmentForm = () => {

    const addAppointmentApi = "https://freeapi.miniprojectideas.com/api/HospitalAppointment/AddNewAppointment"

    let [addAppointment, setAddAppointment] = useState({
        "name": "",
        "mobileNo": "",
        "city": "",
        "age": 0,
        "gender": "",
        "appointmentDate": "",
        "appointmentTime": "",
        "isFirstVisit": false,
        "naration": ""
    })

    const getAppointmentData = (event, key) => {
        setAddAppointment(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    const getIsFirstVisit = (event) => {
        setAddAppointment(prevObj => ({ ...prevObj, isFirstVisit: event.target.checked }))
    }

    const addAppointmentData = async () => {
        debugger;
        const result = await axios.post(addAppointmentApi, addAppointment)
        if (result.data.result) {
            alert('Appointment Booked')
        }
        else {
            alert(result.data.message)
        }
    }

    return (
        <div>
            <section className="vh-100 bg-secondary-subtle">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black">
                                <div className="card-body p-md-1">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-primary">New Appointment</p>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-user fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className="   mb-0">
                                                            <input type="text" placeholder="Enter Name"
                                                                className="form-control border-secondary" onChange={(event) => { getAppointmentData(event, 'name') }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-phone fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className="   mb-0">
                                                            <input type="text"
                                                                placeholder="Enter Mobile No" className="form-control border-secondary" onChange={(event) => { getAppointmentData(event, 'mobileNo') }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-map-marker fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className="   mb-0">
                                                            <input type="text" placeholder="Enter City"
                                                                className="form-control border-secondary" onChange={(event) => { getAppointmentData(event, 'city') }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-calendar fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className="  mb-0">
                                                            <input type="text" placeholder="Enter Age"
                                                                className="form-control border-secondary" onChange={(event) => { getAppointmentData(event, 'age') }} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-plus-circle fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className=" flex-fill mb-0 text-start">
                                                            <input type="checkbox" id='check' onChange={(event) => { getIsFirstVisit(event) }} />
                                                            <label className='ms-2' for='check'>Is First Time</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-venus-mars fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className="mb-0 flex-fill text-start">
                                                            <input type="radio" name='gender' id='male' value="Male" className='m-1' onChange={(event) => { getAppointmentData(event, 'gender') }} />
                                                            <label className='me-2' for='male'>Male</label>
                                                            <input type="radio" name='gender' id='female' value="Female" className='m-1' onChange={(event) => { getAppointmentData(event, 'gender') }} />
                                                            <label for='female'>Female</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-user fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className="   mb-0">
                                                            <input type="date" className="form-control border-secondary" onChange={(event) => { getAppointmentData(event, 'appointmentDate') }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-clock-o fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                        <div className="   mb-0">
                                                            <input type="text"
                                                                placeholder="Enter Appointment Time" className="form-control border-secondary" onChange={(event) => { getAppointmentData(event, 'appointmentTime') }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fa fa-file-text fa-lg me-3 fa-fw text-secondary text-end"></i>
                                                <div className=" flex-fill mb-0">
                                                    <textarea placeholder="Enter Naration" rows="3"
                                                        className="form-control border-secondary" onChange={(event) => { getAppointmentData(event, 'naration') }}></textarea>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button className='btn btn-primary' onClick={addAppointmentData}>Book Appointment</button>
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                                            <img src={doctor} className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppointmentForm;