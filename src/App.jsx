import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true)
      /* solicitud a una API
       GET devuelve datos
       POST crean un dato
       PUT o PATCH modificar datos de un objeto
       DELETE borrar un dato
      */
      //  usando JS FetchAPI
      const respuesta = await fetch(
        `https://dragonball-api.com/api/characters/${getRandomIntInclusive()}`
      );
      console.log(respuesta);
      if (respuesta.status === 200) {
        //extraer los datos del body
        const datos = await respuesta.json();
        console.log(datos);
        setPersonaje(datos);
        setMostrarSpinner(false)
      } else {
        alert("Se produjo un error, intenta en unos minutos");
      }
    } catch (error) {
      console.error(error)
      alert("Se produjo un error, intenta en unos minutos");
    }
  };

  const getRandomIntInclusive = () => {
    return Math.floor(Math.random() * (40 - 1 + 1) + 1);
  };

  return (
    <>
      <Container className="text-center my-4 d-flex flex-column align-items-center">
        {
          // (condicion logica)? aqui va lo que hago si cumplo la condicion: aqui va el codigo si no cumplo la condicion.
          mostrarSpinner ? (
            <Spinner animation="grow" variant="light" />
          ) : (
            <Frase personaje={personaje}></Frase>
          )
        }
        <Button variant="primary" className="mt-3" onClick={consultarAPI}>
          Obtener personaje
        </Button>
      </Container>
    </>
  );
}

export default App;
