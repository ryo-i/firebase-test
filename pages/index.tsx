import React, { createContext } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Inner from '../components/Inner';
import Inner2 from '../components/Inner2';
import Inner3 from '../components/Inner3';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const headerText = Data.header.text;

const url = {
  json: {
    url: 'data/member.json'
  },
  spreadsheet: {
    url: 'https://sheets.googleapis.com/v4/spreadsheets/1jQfqA6yPurQWpkKYaU4mYiMwG_VXx6bgCCc-1zoZ4Tc/values/beatles?key=AIzaSyBju9iq3ug6gJMqyVsoGX_YByHt6L3Dh0c'
  },
  realtimeDatabase: {
    url: 'https://fir-test-79045-default-rtdb.asia-southeast1.firebasedatabase.app/.json'
  },
  firestore: {
    url: 'https://firestore.googleapis.com/v1/projects/fir-test-79045/databases/(default)/documents/member/'
  }
};

export const Context: React.Context<{url: string;}> = createContext(url.json);

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
          <Context.Provider value={url.json} >
            <Inner />
          </Context.Provider>
        </section>
        <section>
          <h2>スプレッドシートから読み込み</h2>
          <Context.Provider value={url.spreadsheet} >
            <Inner2 />
          </Context.Provider>
        </section>
        <section>
          <h2>Realtime Databaseから読み込み</h2>
          <Context.Provider value={url.realtimeDatabase} >
            <Inner />
          </Context.Provider>
        </section>
        <section>
          <h2>Firesroteから読み込み</h2>
          <Context.Provider value={url.firestore} >
            <Inner3 />
          </Context.Provider>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home;