import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";

export default function App() {
  //Lista de links redes sociais

  return (
    <>
      <div className={styles.container}>
        <Cabecalho />
        {/* <img src={reactLogo} alt={reactLogoAlt} /> */}
        {/* <Conteudo reactLogoProps={reactLogo} reactLogoAltProps={reactLogoAlt} /> */}
        <Outlet />
        <Rodape/>
      </div>
    </>
  );
}
