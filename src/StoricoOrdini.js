import "./App.css";
import logo from "./logo.jpg";
import React from "react";
import { Outlet } from "react-router-dom";
import storicoOrdini from "./storicoOrdini.json";
import Card from "react-bootstrap/Card";

function StoricoOrdini() {

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
      <div className="storic">
        {storicoOrdini.map((item) => (
          <div className="card-storic">
            <Card.Img className="card-image-storic" src={item.image} />
            <hr className="hr-color"/>
            <Card.Body className="card-text">
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoricoOrdini;
