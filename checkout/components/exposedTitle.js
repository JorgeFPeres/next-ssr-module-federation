import React, { useEffect } from 'react';
import styles from './sample.module.css';
const ExportredTitle = () => {
  console.log('---------carregando remote component---------');
  useEffect(() => {
    console.log('HOOKS FUNCIONAM');
  }, []);
  return (
    <div className="hero">
      <h1 className={'title ' + styles.thing}>
        {' '}
        Isto vem do <code>checkout</code> !!!
      </h1>
      <p className="description">E funciona!</p>
    </div>
  );
};

export default ExportredTitle;
