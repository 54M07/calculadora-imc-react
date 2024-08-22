import React, { useState } from "react";
import Formulario from "./componentes/Formulario/Formulario";
import Resultado from "./componentes/Resultado/Resultado";
import styles from "./App.module.css";
import ExplicacaoIMC from "./componentes/sobre/ExplicacaoIMC";
import Footer from "./componentes/Footer/Footer";

const App = () => {
  const [imc, setImc] = useState(null);

  return (
    <div>
      <div className={styles.container}>
      <div className={styles.App}>
        <h1 className={styles.title}>Calculadora de IMC</h1>
        <Formulario aoCalcular={setImc} />
        <Resultado imc={imc} />
      </div>
      <div>
        <ExplicacaoIMC />
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
};

export default App;
