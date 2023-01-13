import Head from "next/head";

import GlobalStyles from "@styles/globalStyles";
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Boiler</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
