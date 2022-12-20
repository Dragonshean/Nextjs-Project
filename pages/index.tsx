import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Facebook from '../components/Facebook'

export default function Home() {
  return (
    <>
      <Head>
        <title>Caesar Steak 凱薩西餐牛排</title>
      </Head>
      <Navbar />
      <Facebook/>

      <Footer/>
    </>
  )
}
