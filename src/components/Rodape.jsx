import { createElement } from "react";

export default function Rodape(props) {
    //area declarativa de variaveis, funções e tal
  
      return (
        <>
        {/* posso usar fragment ao invés de div. melhor pq não interfere no layout */}
            <footer>

                <ul>
                    {props.listaProps.map((li, index) => {
                        createElement('li', {key: index}, li);
                        return li;
                    })}
                </ul>
                <p>&copy; 2021, Vite.js and React.</p>
            </footer>
        </>
      );
    }