import Head from 'next/head'
import styles from './index.module.css';
//Only component wise styling is applied not page wise
//creates next js class and uses h1.<class>
// to make it all we make it global
function Heading(props) {
  return (
    <div>
      <h1 className={styles.red} >
        {props.heading}
      </h1>

    </div>
  )
}
export default function Home() {
  return (
    <div >
      <Heading heading="red" />
      <h1>black</h1>
    </div>
  )
}
