import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'provider/ThemeProvider';
import Header from 'shared/Header';
import { Footer } from 'shared/Footer';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>
      <ThemeProvider>
        <NextNProgress />
        <div className="global-container">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
