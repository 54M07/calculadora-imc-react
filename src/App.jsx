import React, { useState } from 'react';
import Formulario from './componentes/Formulario/Formulario';
import Resultado from './componentes/Resultado/Resultado';
import styles from './App.module.css';

const App = () => {
  const [imc, setImc] = useState(null);

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Calculadora de IMC</h1>
      <Formulario aoCalcular={setImc} />
      <Resultado imc={imc} />
    </div>
  );
};

export default App;
