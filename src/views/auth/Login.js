import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

function Login() {
  return (
    <div>
      <Menu />
      <div id="content-form" className="d-flex justify-content-center p-2 mt-4">
        <form className="container">
            <h4>Formulario Login</h4>
          <div className="col-md-6">
            <label className="form-label">Usuario</label>
            <input type="text" className="form-control" placeholder="Usuario" name="username" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="Contraseña" name="password" />
          </div>
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
