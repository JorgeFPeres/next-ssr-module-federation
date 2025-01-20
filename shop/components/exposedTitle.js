import React, { useEffect } from 'react';
const ExportredTitle = () => {
  console.log('---------carregando remote component---------');
  useEffect(() => {
    console.log('HOOKS FUNCIONAM');
  }, []);
  return (
    <div className="hero">
      <h1 className="title">
        {' '}
        Isto vem de <code>shop</code> !!!
      </h1>
      <p className="description">E esta funcionando</p>
    </div>
  );
};

export default ExportredTitle;
