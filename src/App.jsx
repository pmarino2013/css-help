import { BrowserRouter, Routes, Route } from "react-router-dom";
import imagenJson from "./data/imagen-css.json";
import textoJson from "./data/texto-css.json";
import HomeScreen from "./views/HomeScreen";
import NotFoundScreen from "./views/NotFoundScreen";
import ImagenesCssApp from "./components/ImagenesCssApp";
import WelcomeScreen from "./views/WelcomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          <Route path="/" element={<WelcomeScreen />} />
          <Route
            path="imagenes"
            element={<ImagenesCssApp datos={imagenJson} />}
          />
          <Route path="texto" element={<ImagenesCssApp datos={textoJson} />} />
        </Route>

        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
