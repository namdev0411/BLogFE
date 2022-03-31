import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";
import Head from 'next/head'

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: #6B5EE9;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

  background-color:rgba(255, 255, 255, 0.8);
`
function MyApp({ Component, pageProps }) {
  const [isLoading, setisLoading] = useState(false);
  Router.onRouteChangeStart = (url) => {
    setisLoading(true);
  };

  Router.onRouteChangeComplete = (url) => {
    setisLoading(false);
  };
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous">
        </link>
      </Head>
      <ScaleLoader
        color="#34d"
        loading={isLoading}
        css={override}
        size={50}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
