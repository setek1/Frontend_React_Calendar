import React, { useState, useEffect } from 'react';
import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';
import "dayjs/locale/es";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

import {useDates,} from './hooks/useDates'

{/*Cambiar Idioma */}
dayjs.locale("es")

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const localizer=dayjsLocalizer(dayjs);
  // const events=[
  //   {
  //       start:dayjs('2024-03-27T10:00').toDate(),
  //       end:dayjs('2024-03-27T12:00').toDate(),
  //       title:"Evento 1",
  //       hola:'Hola',
  //   },
    
  // ]
  const [refecth, setRefectch] = useState(false);
  const{dates,error,getDates,loading,addDate}=useDates();

  useEffect(() => {
    getDates()
  }, [refecth])
  

  useEffect(() => {
    if (dates && dates.length > 0) {
      const formattedEvents = dates.map(date => ({
        id: date.id,
        title: date.title,
        start: new Date(dayjs(date.start).toDate()),
        end: new Date(dayjs(date.end).toDate())
      }));
      setEvents(formattedEvents);
    }
  }, [dates]);

   
  console.log(events,'Horas formateadas')
  {/*Cambiar Idioma de los detalles*/}
  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos"
};
const handleSubmit =async (event) => {
  const title='TestDESDEReact'
  event.preventDefault();
  const start = dayjs(event.target.elements.start.value).toISOString(); // Asegurando que start tenga el formato ISO 8601
  const end = dayjs(start).add(1, 'hour').toISOString();
  const formData = {
    start,
    end,
    title,
  };
  await addDate(formData);
  setRefectch(prev => !prev);
  // console.log('Selected Date:', dayjs(selectedDate).toDate());
  

  // const formData = new FormData(event.target);

  // // Crear un objeto para almacenar los datos del formulario
  // const formDataObject = {};
  // formData.forEach((value, key) => {
  //   formDataObject[key] = value;
    
  // });

  // // Mostrar los datos del formulario en la consola
  // console.log('Datos del formulario:', formDataObject.start);
};



  return (
    <div className="h-screen w-screen p-2 flex">
      <div className="h-3/5 w-3/5 ">
        <Calendar 
          localizer={localizer} 
          events={events}
          messages={messages}
          popup
          min={new Date(0, 0, 0, 8, 0, 0)} // 8 am
          max={new Date(0, 0, 0, 18, 0, 0)} // 6 pm
        
        />
      </div>
      <div className="h-2/5 w-2/5 p-2">
        <div className='border-2 border-[#e6e6e6] justify-content-center p-3 rounded-md'>
            <div className='pb-4 text-center'>
              <h1 className='text-5xl font-bold'>Agende una hora </h1>
            </div>
            <form  className="flex flex-col w-full  w-auto" onSubmit={handleSubmit}>
              <Flatpickr
                  className='w-auto border border-[#e6e6e6] border-2 rounded-md p-2 font-bold'
                  value={selectedDate}  
                  name='start'
                  onChange={date => setSelectedDate(date)}
                  options={{ 
                    dateFormat: "Y-m-d H:i", // Set desired date format
                     // Disable mobile calendar
                    // Set minimum selectable date
                    enableTime: true,
                    minuteIncrement: 60,
                  }}
                  placeholder="Selecciona una fecha"
              />
              <button type='submit' className="bg-[#3174ad] hover:bg-[#3174ad] text-white font-bold py-2 px-4 border-b-4 border-[#3174ad] hover:border-[#3174ad] rounded mt-4 w-auto">
                Registrar Fecha
              </button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App