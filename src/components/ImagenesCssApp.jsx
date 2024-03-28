import "../css/styles.css";
import ListaApp from "./ListaApp";

const ImagenesCssApp = ({ datos }) => {
  const { title, principales, apariencia, otras } = datos;

  return (
    <div className="container">
      {/* Contenido de tu componente */}
      <div className="row">
        <div className="col text-center">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Principales</h3>
          <ListaApp array={principales} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Apariencia</h3>
          <ListaApp array={apariencia} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Otras</h3>
          <ListaApp array={otras} />
        </div>
      </div>
    </div>
  );
};

export default ImagenesCssApp;
