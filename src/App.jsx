import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs'
import "dayjs/locale/es"

{/*Cambiar Idioma */}
dayjs.locale("es")

function App() {
  console.log(dayjs('2024-03-27T10:00:00').toDate())
  const localizer=dayjsLocalizer(dayjs);
  const events=[
    {
        start:dayjs('2024-03-27T10:00:00').toDate(),
        end:dayjs('2024-03-27T12:00:00').toDate(),
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



  return (
    <div className="h-screen w-screen p-2 ">
      <div className="h-4/5 w-4/5 ">
        <Calendar 
          localizer={localizer} 
          events={events}
          messages={messages}
          popup
          min={new Date(0, 0, 0, 8, 0, 0)} // 8 am
          max={new Date(0, 0, 0, 18, 0, 0)} // 6 pm
        
        />
      </div>
    </div>
  )
}

export default App