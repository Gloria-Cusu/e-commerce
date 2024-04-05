import "./App.css";
import logo from "./logo.jpg";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Ordini() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="navbar-option">
            <img src={logo} alt={logo} width="100" height="60" />
          </li>
          <li className="navbar-option">
            {/* <Link to="/ordini">Ordini</Link> */}
            <p>ordini</p>
          </li>
          <li className="navbar-option">
            {/* <Link to="/storicoOrdini">Storico Ordini</Link> */}
          </li>
          <li className="navbar-option">
            <p>Logout</p>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div className="card">
        <div>
          <img
            src="https://m.media-amazon.com/images/I/519nePwnpIL._AC_SX679_.jpg"
            alt="Galaxy S23"
            class="card-image"
          ></img>
          <p>Galaxy S23</p>
        </div>
        <div className="card-info">
          <h3 className="title">Informazioni necessarie per la spedizione</h3>
          <p className="input-title">Nome</p>
          <input
            type="text"
            id="fname"
            name="fname"
            className="input-info"
            placeholder="Inserisci nome"
          />
          <p className="input-title">Cognome</p>
          <input
            type="text"
            id="fname"
            name="fname"
            className="input-info"
            placeholder="Inserisci cognome"
          />
          <p className="input-title">Indirizzo</p>
          <input
            type="text"
            id="fname"
            name="fname"
            className="input-info"
            placeholder="Inserisci indirizzo"
          />
          <p className="input-title">Email</p>
          <input
            type="email"
            id="email"
            name="email"
            className="input-info"
            placeholder="Inserisci email"
          />
          <p className="input-title">Numero di Telefono</p>
          <input
            type="text"
            id="fname"
            name="fname"
            className="input-info"
            placeholder="Inserisci telefono"
          />
          <br />
          <Alert show={show} variant="success" className="alert-conferm">
            <h3>Ordine confermato</h3>
            <p>Grazie, il tuo ordine è andato a buon fine!</p>
            <div className="button-close">
              <Button
                onClick={() => setShow(false)}
                variant="outline-success"
                className="card-details"
              >
                Chiudi
              </Button>
            </div>
          </Alert>
          {!show && (
            <div className="button-conferm">
              <Button onClick={() => setShow(true)} className="card-details">
                Conferma
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ordini;
