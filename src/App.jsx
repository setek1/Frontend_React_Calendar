import React, { useState } from 'react';
import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';
import "dayjs/locale/es";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

{/*Cambiar Idioma */}
dayjs.locale("es")

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  const localizer=dayjsLocalizer(dayjs);
  const events=[
    {
        start:dayjs('2024-03-27T10:00').toDate(),
        end:dayjs('2024-03-27T12:00').toDate(),
        title:"Evento 1",
        hola:'Hola',
    },
    
  ]

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
const handleSubmit = (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Log the selected date to the console
  console.log('Selected Date:', selectedDate);

  // Your additional form processing logic here (if needed)
  // ...
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
        <div className='border-2 border-blue-500 justify-content-center p-3 rounded-md'>
            <div className='pb-4 text-center'>
              <h1 className='text-5xl font-bold'>Agende una hora </h1>
            </div>
            <form  className="flex flex-col w-full  w-auto" onSubmit={handleSubmit}>
              <Flatpickr
                  className='w-auto border border-blue-500 border-2 rounded-md p-2 font-bold'
                  value={selectedDate}  
                  onChange={date => setSelectedDate(date)}
                  options={{
                    dateFormat: "Y-m-d H:i K", // Set desired date format
                    disableMobile: true, // Disable mobile calendar
                    // Set minimum selectable date
                    enableTime: true,
                    minuteIncrement: 60,
                  }}
                  placeholder="Selecciona una fecha"
              />
              <button type='submit' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 w-auto">
                Registrar Fecha
              </button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App