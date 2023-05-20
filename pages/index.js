import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-windows-blue h-screen w-screen">
        <div>
          <h1>Hallo</h1>
        </div>
      </div>

      <footer className="bg-windows-grey h-12 w-full absolute bottom-0 border-[#D9E4EA] border-t-4">
        <h1>ALL I NEED</h1>
        <FontAwesomeIcon icon={faInstagram} />

      </footer>
    </div>
  )
}
