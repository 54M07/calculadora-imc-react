import React from 'react';
import styles from './ExplicacaoIMC.module.css';

const ExplicacaoIMC = () => {
  return (
    <div className={styles.explicacao}>
      <h2 className={styles.explicacaoTitle}>O que é o IMC?</h2>
      <p className={styles.explicacaoText}>
        O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está em seu peso ideal, baseada na altura. É calculado dividindo o peso da pessoa (em kg) pela altura ao quadrado (em metros).
      </p>
      <h3 className={styles.explicacaoSubtitle}>Classificações do IMC:</h3>
      <ul className={styles.classificacoes}>
        <li>Abaixo de 18.5: <strong>Abaixo do peso</strong></li>
        <li>18.5 - 24.9: <strong>Peso normal</strong></li>
        <li>25 - 29.9: <strong>Sobrepeso</strong></li>
        <li>30 - 34.9: <strong>Obesidade grau 1</strong></li>
        <li>35 - 39.9: <strong>Obesidade grau 2</strong></li>
        <li>40 ou mais: <strong>Obesidade grau 3</strong></li>
      </ul>
      <h3 className={styles.explicacaoSubtitle}>Orientações de Saúde:</h3>
      <ul className={styles.orientacoes}>
        <li>Mantenha uma dieta balanceada rica em frutas, vegetais e fibras.</li>
        <li>Pratique atividades físicas regularmente, como caminhadas, corridas, ou exercícios de força.</li>
        <li>Evite o consumo excessivo de açúcares e alimentos processados.</li>
        <li>Faça check-ups regulares para monitorar sua saúde geral e IMC.</li>
        <li>Consulte um profissional de saúde para orientação personalizada.</li>
      </ul>
    </div>
  );
};

export default ExplicacaoIMC;
