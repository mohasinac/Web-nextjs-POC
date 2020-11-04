import './global.css';
//global css can only be imported from _app file and not from other files
// because component styles can overlap with each other
export default function MyApp({Component , pageProps }){
    return (
        <Component {...pageProps } />
    )
}