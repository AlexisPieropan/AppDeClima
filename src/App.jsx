import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  //LOGICA DEL COMPONENTE:
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "578e7fcb3d0e5741029acfeb10524b4c";
  const difKelvin = 273.15;
  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  //FUNCION FETCH PARA TRAER LA INFO MEDIANTE NUESTRA API
  const fetchClima = async () => {
    try {
      //se espera la respuesta de la URL compuesta por la key proporcionada por la API
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`); //!SE HACE LA PETICION
      const data = await response.json(); //!se recibe la data del clima de la API
      setDataClima(data); //! SE SETEA LA DATA
      console.log(data);
    } catch (err) {
      console.error("Ocurrio el siguiente error:", err);
    }
  };


 

  //------------------------------------
  //HTML DEVUELTO:
  return (
    <div className="container">
      <h1 >Aplicacion de clima 🌦️</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ciudad}
          onChange={handleCambioCiudad}
          placeholder="Ingrese ciudad"
        />
        <button type="submit">Buscar</button>
      </form>

      {
        //LOGICA DE RENDERIZADO (Si NO se cumple la primera condicion no pasa a la sig. )

        dataClima && (

          

          <div className="containerTarjeta">
          <Card
                    location={dataClima.name}
                    temperature={parseInt(dataClima?.main?.temp - difKelvin)}
                    description={dataClima.weather[0].description}
                    icon={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                    />
           </div>
        )
      }
    </div>
  );
}

export default App;
