/*import React from "react";
import ListadoMercaderia from "./components/ListadoMercaderia";
import AgregarMercaderia from "./components/AgregarMercaderia";
import ModificarMercaderia from "./components/ModificarMercaderia";

function App() {
  return (
    <div className="App">
      <AgregarMercaderia />
      <ListadoMercaderia />
      <ModificarMercaderia/>
    </div>
  );
}

export default App;*/

import ListadoMercaderia from "./components/ListadoMercaderia";
import AgregarMercaderia from "./components/AgregarMercaderia";
import ModificarMercaderia from "./components/ModificarMercaderia";
function App() {
  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Gestión de Mercadería</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <AgregarMercaderia />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <ListadoMercaderia />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <ModificarMercaderia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
