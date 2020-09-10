import React from "react";
import Form from "./Form";
import logoCanalRural from "../assets/static/logo-canal-rural.png";

const Sale = () => {
  return (
    <section className="section sale">
      <div className="container">
        <h3>Remate de Hacienda</h3>
        <div className="row">
          <div className="col-md-8">
            <h1>Próximo Remate Televisado</h1>
            <h2>
              Registrate para participar de la próxima transmisión en vivo
            </h2>
            <div className="sale-info">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">Inicio del Remate</div>
                      <div className="card-date">
                        Miércoles 16 de Septiembre. <br /> 13.30 horas
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">En Vivo por</div>
                      <div className="card-logo">
                        <img
                          src={logoCanalRural}
                          alt="canal rural"
                          className="logo-canal-rural"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sale;
