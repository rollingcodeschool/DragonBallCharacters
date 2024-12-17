import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";

function App() {
  return (
    <>
      <Container className="text-center my-4 d-flex flex-column align-items-center">
        <Frase></Frase>
        <Button variant="primary" className="mt-3">
          Obtener personaje
        </Button>
      </Container>
    </>
  );
}

export default App;
