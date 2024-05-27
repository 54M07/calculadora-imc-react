import React from 'react';
import styles from './Resultado.module.css';

const obterClassificacao = (imc) => {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 24.9) return 'Peso normal';
  if (imc < 29.9) return 'Sobrepeso';
  if (imc < 34.9) return 'Obesidade grau 1';
  if (imc < 39.9) return 'Obesidade grau 2';
  return 'Obesidade grau 3';
};

const Resultado = ({ imc }) => {
  if (imc === null) return null;

  const classificacao = obterClassificacao(imc);
  return (
    <div className={styles.resultado}>
      <h2 className={styles.resultadoTitle}>Seu IMC: {imc.toFixed(2)}</h2>
      <p className={styles.resultadoText}>Classificação: {classificacao}</p>
    </div>
  );
};

export default Resultado;
