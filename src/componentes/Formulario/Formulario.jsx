import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({ aoCalcular }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const aoEnviar = (evento) => {
    evento.preventDefault();
    const alturaEmMetros = parseFloat(altura) / 100;
    const pesoEmKg = parseFloat(peso);
    const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    aoCalcular(imc);
  };

  return (
    <form onSubmit={aoEnviar} className={styles.form}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <button type="submit" className={styles.button}>Calcular IMC</button>
    </form>
  );
};

export default Formulario;
