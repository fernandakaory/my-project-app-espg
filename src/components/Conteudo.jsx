export default function Conteudo(props) {
  //area declarativa de variaveis, funções e tal

    return (
      <>
        {/* posso usar fragment ao invés de div. melhor pq não interfere no layout */}
        <section>
          {/* area imperativa */}
          <p>
            <a href="/">Home Page</a>
          </p>
          <button onClick={()=> alert("Hello World")}>Click me</button>
          <img src={props.reactLogoProps} alt={props.reactLogoAltProps} />
        </section>
      </>
    );
  }