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