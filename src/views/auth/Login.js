import React, { useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import axios from "axios";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function call() {
    axios.post("http://localhost:4000/api/users/login", 
    { user: user, 
      password: password
    }
    )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
      });
  }

  return (
    <div>
      <Menu />
      <div id="content-form" className="d-flex justify-content-center p-2 mt-4">
        <form className="container">
          <h4>Formulario Login</h4>
          <div className="col-md-6">
            <label className="form-label">Usuario</label>
            <input
              onChange={(e) => setUser(e.target.value)}
              value={user}
              type="text"
              className="form-control"
              placeholder="Usuario"
              name="username"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Contraseña</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="password"
            />
          </div>
          <input
            type="button"
            onClick={call}
            className="btn btn-primary mt-2"
            value="Aceptar"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
