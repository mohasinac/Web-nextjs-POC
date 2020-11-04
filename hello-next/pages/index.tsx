import Head from 'next/head'

//Only component wise styling is applied not page wise
//creates next js class and uses h1.<class>
// to make it all we make it global
function Heading (props){
  return (
    <div>
      <h1>
        {props.heading}
      </h1>
      <style jsx global>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
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
