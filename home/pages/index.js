import React, { Suspense, lazy } from 'react';
import Head from 'next/head';
typeof window !== 'undefined' && console.log(window.checkout);
const RemoteTitle = lazy(() => import('checkout/title'));

const Home = ({ loaded }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/nextjs-ssr/home/public/favicon.ico" />
      </Head>

      <div className="hero">
        <Suspense fallback={'loading remote title'}>
          <RemoteTitle />
        </Suspense>
        <h1 className="title">
          Next.js ^14 com Webpack 5!
        </h1>
        <p className="description">
          Workss???
        </p>
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
          font-size: 48px;
        }

        .title,
        .description {
          text-align: center;
        }

        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }

        .card:hover {
          border-color: #067df7;
        }

        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }

        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
