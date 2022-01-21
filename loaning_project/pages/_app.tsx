import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
  <Header/>
  <ToastContainer position="top-center" closeOnClick pauseOnHover={false} autoClose={3000} bodyClassName="toastBody" />
  <Component {...pageProps} />
  </> ) 
}

export default MyApp
