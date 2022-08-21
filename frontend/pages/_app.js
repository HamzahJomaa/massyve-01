import '../styles/globals.css'
import React from "react";
function MyApp({ Component, pageProps }) {
  return (
      <React.StrictMode>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <Component {...pageProps} />
      </React.StrictMode>
  )
}

export default MyApp
