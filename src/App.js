import logo from './logo.svg';
import './App.css';

import ListadoMercaderia from './components/ListadoMercaderia';
import AgregarMercaderia from './components/AgregarMercaderia';
//import modificarMercaderia from './components/modificarMercaderia';

function App() {
  return (
    <div>
      <ListadoMercaderia/>
      <AgregarMercaderia/>
      
    </div>
  );
}
export default App();