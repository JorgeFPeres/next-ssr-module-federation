import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const CC = dynamic(() => import('../components/test'), { ssr: false });
const Checkout = props => (
  <div>
    <Head>
      <title>checkout</title>
      <link rel="icon" href="/nextjs-ssr/checkout/public/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>checkout page</h1>
      <CC />
      <h3 className="title">Esta é uma pagina federada owner localhost:3000</h3>
      <span>
        {' '}
        Dados da página federada <pre>getInitalProps</pre> 
      </span>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);
Checkout.getInitialProps = async () => {
  return { test: 123 };
};
export default Checkout;
