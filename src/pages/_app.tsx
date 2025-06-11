import AppContextProvider from "@/contexts/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
     <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1GFCSFQV25"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1GFCSFQV25');
        `}
      </Script>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

