import Head from 'next/head'

//Only component wise styling is applied not page wise
function Heading (props){
  return (
    <div>
      <h1>
        {props.heading}
      </h1>
      <style jsx>
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
