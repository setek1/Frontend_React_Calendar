import React from 'react'
import {BASE_API} from '../utils/constants' 

export async function getDatesApi(){
    try{
        const url=`${BASE_API}/api/Agenda/`
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}

export async function addDateApi(data){
    try{
        const url = `${BASE_API}/api/Agenda/`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        };
        const response = await fetch(url,params);
        const result= await response.json();
        return result;
    }
    catch(error){
        throw(error)
    }
}