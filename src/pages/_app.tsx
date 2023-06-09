import type { AppProps } from 'next/app';
import "../framework/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
