import React from "react";
import styles from "./Spending.module.css";

export const Spending = () => {
  return (
    <>
      <div className={styles.titulo}>
        <h1>Spending - Last 7 Days</h1>
      </div>
      <div>
        <canvas>

        </canvas>
      </div>
      <hr />
      <div className={styles.rodape}>
        <div className={styles.mesAtual}>
            <p>Total this month</p>
            <h2>$478.33</h2>
        </div>
        <div className={styles.mesPassado}>
            <p>+2.4%</p>
            <p>from last month</p>
        </div>
      </div>
    </>
  );
};
