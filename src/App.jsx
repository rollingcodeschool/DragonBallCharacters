import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    /* solicitud a una API
     GET devuelve datos
     POST crean un dato
     PUT o PATCH modificar datos de un objeto
     DELETE borrar un dato
    */
    //  usando JS FetchAPI
    const respuesta = await fetch(`https://dragonball-api.com/api/characters/${getRandomIntInclusive()}`);
    console.log(respuesta);
    if(respuesta.status === 200){
      //extraer los datos del body
      const datos = await respuesta.json()
      console.log(datos);
      setPersonaje(datos);
    }else{
      alert('Se produjo un error, intenta en unos minutos')
    }
    
  };

  const getRandomIntInclusive = () =>{
    return Math.floor(Math.random() * (40 - 1 + 1) + 1);
  }

  return (
    <>
      <Container className="text-center my-4 d-flex flex-column align-items-center">
        <Frase personaje={personaje}></Frase>
        <Button variant="primary" className="mt-3">
          Obtener personaje
        </Button>
      </Container>
    </>
  );
}

export default App;
