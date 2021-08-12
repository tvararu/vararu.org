import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
