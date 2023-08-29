// import React from "react";
//o componente que importa é o pai
//o app é o pai, eu acho
//passar infos do pai para para o filho
//para desativar o props tem que ir la no eslintrc

import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import reactLogo from "./assets/react.svg";

export default function App() {
  let reactLogoAlt = "React logo";

  //lista de links redes sociais
  let listaLinks = [<li>GitHub</li>,<li>X</li>, <li>Reddit</li>]

  return (
    <>
      <div className="container">

        <Cabecalho/>
        {/* <img src={reactLogo} alt={reactLogoAlt} /> */}
        <Conteudo reactLogoProps = {reactLogo} reactLogoAltProps = {reactLogoAlt}/>

        <Rodape listaProps = {listaLinks}/>

      </div>
    </>
  )
}
