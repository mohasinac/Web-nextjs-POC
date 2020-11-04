import '../styles/globals.css'

//responsible for rendering pages
// component and props passed to the component internally
// both server and client
function MyApp({ Component, pageProps }) {
  //console.log('Hello from app');
  return <Component {...pageProps} />
}

export default MyApp