import "./App.css";
import product from "./product.json";
import logo from "./logo.jpg";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="navbar-option">
            <img src={logo} alt={logo} width="100" height="60" />
          </li>
          <li className="navbar-option">
            {/* <Link to="/ordini">Ordini</Link>  */}
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
      <div>
        {product.map((item) => (
          <div className="card">
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
              {/* Problem */}
              {isModalOpen &&
                product.map((item) => (
                  <div className="modal">
                    <p>Disponibilità prodotto: {item.availability}</p>
                  </div>
                ))}
            </div>
            <button onClick={openModal} className="card-details">
              Maggiori dettagli
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
