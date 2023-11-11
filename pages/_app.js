import Head from "next/head";
import React from "react";
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Assignment Work | Project</title>
        <meta name="desription" content="Assignment Work Project on Nextjs" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
export default MyApp
