import React from 'react';
import './Card.css'; // Importar una hoja de estilos si es necesario

export const Card = ({ location, temperature, description, icon }) => {

   //FUNCION CREADA PARA PASAR ALGUNOS ESTADOS A ESPAÑOL YA QUE LA API SOLO LO DEVUELVE EN INGLES
   const handleTraduccion = () => {
    let descriptionEs;


    switch (description) {
      case "clear sky":
        descriptionEs = "Cielo despejado";
        break;

      case "few clouds":
        descriptionEs = "Pocas nubes";
        break;

        case "overcast clouds":
          descriptionEs = "Nubes cubiertas";
          break;

        case "scattered clouds":
          descriptionEs="nubes dispersas"
          break;

        case "mist":
          descriptionEs = "Neblina";
          break;
    
          case "broken clouds":
            descriptionEs = "Nubes Rotas";
            break;
    
          case "shower rain":
            descriptionEs = "Lluvias con Tormentas";
            break;
    
            case "rain":
              descriptionEs="Lluvia"
              break;

          case "thunderstorm":
            descriptionEs="Tormenta"
            break;
          
          default:
            console.log("ERROR esa city no existe")
            break;
    }

    return <p> {descriptionEs} </p>;
  };

  return (
    <div className="weather-card">
      <div className="weather-location">{location}</div>
      <div className="weather-icon">
        <img src={icon} alt={description} />
      </div>
      <div className="weather-temperature">{temperature}°C</div>
      <div className="weather-description">{handleTraduccion()}</div>
    </div>
  );
};
