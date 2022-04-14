import Head from 'next/head'
import Image from 'next/image'
import SignUpBorrower from '../components/SignUpBorrower'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        <title>Meraki</title>
        <meta name="description" content="A Peer-2-Peer Money Lending Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
        <div className=''>


          <div className='px-4 py-2 lg:px-12 lg:py-4 mt-12  '>

            <SignUpBorrower />

          </div>



        </div>

      

  
    </div>
  )
}
