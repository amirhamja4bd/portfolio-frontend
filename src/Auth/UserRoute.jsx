import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
import { getToken } from '../helper/FormHHelper';

const UserRoute = () => {

    const token = getToken()

    const [ok, setOk] = useState();

    useEffect(()=>{
        const isUser = async ()=>{
            const {data} = await axios.get(`/is-view`);
            if(data.ok){
                setOk(true);

            }
            else{
                setOk(false);
            }
        };
        if(token) isUser();
    },[token]);

    return ok ? <Outlet/> : <Loading/>

};

export default UserRoute;