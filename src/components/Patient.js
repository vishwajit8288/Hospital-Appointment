import React, { useEffect, useState } from 'react';
import '../patientList.css'
import axios from 'axios';

const PatientList = () => {

    const getAppointmentApi = "https://freeapi.miniprojectideas.com/api/HospitalAppointment/"

    let [allAppointment, setAllAppointment] = useState([]);
    let [todayAppointment, settodayAppointment] = useState([]);
    let [isAllData, setIsAllData] = useState(false)

    useEffect(() => {
        getTodayAppointmentData();
    }, [])

    const getAllAppointmentData = async () => {
        const result = await axios.get(getAppointmentApi + 'GetAllAppointments');
        setAllAppointment(result.data.data);
        setIsAllData(true);
    }
    const getTodayAppointmentData = async () => {
        const result = await axios.get(getAppointmentApi + 'GetTodaysAppointments');
        settodayAppointment(result.data.data);
        setIsAllData(false);
    }

    return (
        <div>
            <div className="container mt-4">
                {
                    !isAllData && <div className='row'>
                        <div className='col-6 text-start'>
                            <h3>Todays Data</h3>
                        </div>
                        <div className='col-6 text-end'>
                            <button className='btn btn-primary' onClick={getAllAppointmentData}>All Data</button>
                        </div>
                    </div>
                }
                {
                    isAllData && <div className='row'>
                        <div className='col-6 text-start'>
                            <h3>All Data</h3>
                        </div>
                        <div className='col-6 text-end'>
                            <button className='btn btn-danger' onClick={getTodayAppointmentData}>Todays Data</button>
                        </div>
                    </div>
                }
                {
                    !isAllData && <div className="row">
                        {
                            todayAppointment.map((item) => {
                                return (<div className="col-lg-4 mt-2">
                                    <div className="card card-margin">
                                        <div className="card-header no-border">
                                            <h5 className="card-title">{item.name}</h5>
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="widget-49">
                                                <div className="widget-49-title-wrapper">
                                                    <div className="widget-49-date-primary">
                                                        <span className="widget-49-date-day">{item.appointmentNo}</span>
                                                    </div>
                                                    <div className="widget-49-meeting-info">
                                                        <span className="widget-49-pro-title">Mumbai</span>
                                                        <span className="widget-49-meeting-time">{item.appointmentDate} {item.appointmentTime}</span>
                                                    </div>
                                                </div>
                                                <div className="widget-49-meeting-action">
                                                    <a href="#" className="btn btn-sm btn-success"> Done</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                }
                {
                    isAllData && <div className="row">
                        {
                            allAppointment.map((item) => {
                                return (<div className="col-lg-4 mt-2">
                                    <div className="card card-margin">
                                        <div className="card-header no-border">
                                            <h5 className="card-title">{item.name}</h5>
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="widget-49">
                                                <div className="widget-49-title-wrapper">
                                                    <div className="widget-49-date-primary">
                                                        <span className="widget-49-date-day">{item.appointmentNo}</span>
                                                    </div>
                                                    <div className="widget-49-meeting-info">
                                                        <span className="widget-49-pro-title">Mumbai</span>
                                                        <span className="widget-49-meeting-time">{item.appointmentDate} {item.appointmentTime}</span>
                                                    </div>
                                                </div>
                                                <div className="widget-49-meeting-action">
                                                    <a href="#" className="btn btn-sm btn-success"> Done</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                }

            </div>
        </div>
    );
};

export default PatientList;