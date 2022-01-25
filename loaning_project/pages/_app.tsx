import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps:{session, ...pageProps}}: AppProps) {
  return (<>
  <SessionProvider session={session}>
    <Header/>
    <ToastContainer position="top-center" closeOnClick pauseOnHover={false} autoClose={3000} bodyClassName="toastBody" />
    <Component {...pageProps} />
  </SessionProvider>
  </> ) 
}

export default MyApp
