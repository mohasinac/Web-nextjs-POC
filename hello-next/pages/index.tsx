import Head from 'next/head'
//only works if file name itself is this format i.e. <file>.module.css/scss
import styles from './index.module.scss';
//Only component wise styling is applied not page wise
//creates next js class and uses h1.<class>
// to make it all we make it global
function Heading(props) {
  return (
    <div>
      <h1 className={styles.red} >
        {props.heading}
        <span> is the heading</span>
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
