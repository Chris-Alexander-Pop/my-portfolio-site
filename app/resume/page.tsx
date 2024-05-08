// Home.tsx
import React from "react";
import Head from "next/head";
import Header from "../../_components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Chris Pop</title>
      </Head>
      <Header />
    </div>
  );
};
export default Home;
