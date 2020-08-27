import React from "react";

function Form(props) {
  return (
    <form className="form">
      <div className="card">
        <div className="card-body">
          <h5>Completa tus datos aquí</h5>
          <div className="form-group">
            <label htmlFor="">Nombre</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Apellido</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Teléfono</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="btn btn-primary btn-lg btn-block">REGISTRATE</div>
        </div>
      </div>
    </form>
  );
}

export default Form;