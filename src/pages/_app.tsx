import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'provider/ThemeProvider';
import Header from 'shared/Header';
import { Footer } from 'shared/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <div className="global-container">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
