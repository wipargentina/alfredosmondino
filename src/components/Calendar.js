import React from "react";
import Moment from "react-moment";

import calendars from "../data/calendars.json";

function Calendar() {
  return (
    <section className="section calendar">
      <div className="container">
        <h3>Agenda</h3>
        <h5>Próximos remates televisados</h5>
        <div className="calendar-list">
          <div className="row justify-content-center">
            {calendars.data.map((calendar) => (
              <div key={calendar.id} className="col-md-4">
                <div className="card">
                  <div className="card-image">
                    <img src={calendar.image} alt="foto" />
                  </div>
                  <div className="card-body">
                    <div className="card-date">
                      <Moment format="DD/MM">{calendar.date}</Moment>
                    </div>
                    <div className="card-title">{calendar.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
