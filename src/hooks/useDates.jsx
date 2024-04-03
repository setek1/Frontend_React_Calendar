import React from 'react'
import {useState} from 'react'

import {getDatesApi} from '../API/dates'

export function useDates() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [dates, setDates] = useState();


    const getDates = async ()=>{

        try{
            setLoading(true)
            const response = await getDatesApi();
            setDates(response)
        }catch{
            setLoading(false)
            setError(error)
        }
    };



  return{
    loading,
    error,
    dates,
    getDates
  }
}
