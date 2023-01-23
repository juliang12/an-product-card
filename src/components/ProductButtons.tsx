import React, { useContext, useCallback } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface ButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReach = useCallback(() => {
    if (counter === maxCount) {
      return true;
    } else {
      return false;
    }
  }, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        disabled={isMaxReach()}
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${isMaxReach() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
