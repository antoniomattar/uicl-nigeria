// types
import type { AppProps } from 'next/app';
// global styles
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
