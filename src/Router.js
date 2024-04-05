import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ordini from "./Ordini";
import StoricoOrdini from "./StoricoOrdini";
import App from "./App";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="ordini" element={<Ordini />} />
        <Route path="storicoOrdini" element={<StoricoOrdini />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);