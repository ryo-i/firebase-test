import React, { createContext } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Inner from '../components/Inner';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const headerText = Data.header.text;

const data = {
  json: {
    url: 'data/member.json'
  }
};

export const Context: React.Context<{url: string;}> = createContext(data.json);

function Home() {
  return (
    <>
      <Head>
        <title>{ headerTitle }</title>
        <meta name="description" content={ headerText } />
        <meta property="og:title" content={ headerTitle } />
        <meta property="og:description" content={ headerText } />
      </Head>
      <Header />
      <main>
        <section>
          <h2>JSONファイルから読み込み</h2>
          <Context.Provider value={data.json} >
            <Inner />
          </Context.Provider>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home;