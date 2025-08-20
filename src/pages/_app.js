import React from "react"; // Ensure React is imported
import "@/styles/globals.css";
import Layout from "../layout/layout";
import Layout1 from "../layout/layout1";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/globals.css"; // Your global styles (if any)
import NProgress from "nprogress";
import Router from "next/router";
import theme from "@/styles/style";
import '@/styles/style.css'
const layouts = {
  default: Layout,
  layout1: Layout1,
};


export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts.default;

  React.useEffect(() => {
    NProgress.configure({ showSpinner: false });
    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Poornam_Events</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
export const metadata = {
  icon: "/favicon.ico",
}