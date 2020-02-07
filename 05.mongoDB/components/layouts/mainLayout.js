import React from "react";
import Head from "next/head";
import Header from "../includes/header";

const MainLayout = props => {
  return (
    <>
      <Head>
        <title>NextJS Application</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/static/css/styles.css" rel="stylesheet" />
      </Head>
      <div className="mainLayout container">
        <Header />
        {props.children}
      </div>

    </>
  );
};

export default MainLayout;
