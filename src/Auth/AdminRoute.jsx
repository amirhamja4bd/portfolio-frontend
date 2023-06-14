import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getToken } from '../helper/FormHHelper';
import Loading from './Loading';
import axiosInstance from "../helper/axiosInstance";

const AdminRoute = () => {
    const token = getToken()
    //state
    const [ok, setOk] = useState();

    useEffect(()=>{
        const isAdmin = async ()=>{
            const {data} = await axiosInstance.get(`/is-admin`);
            if(data.ok){
                setOk(true);
            }
            else{
                setOk(false);
            }
        };
        if(token) isAdmin();
    },[token]);

    return ok ? <Outlet/> : <Loading path="/" />

};

export default AdminRoute;