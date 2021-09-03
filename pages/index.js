import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      
      <Head>
        <title>OurShoes | Home</title>
        <meta name="keywords" content="brands"></meta>
      </Head>
      {/* <navbar/> */}
      
      
      <div className="section">
          <div className={styles.cover}>
            <h1>Nike/Reebok</h1>
            <Link href="/brands/">
            <p>Shop Now</p>
            </Link>
          </div>

        <div className={styles.isi}>
          <div className={styles.isi1}>
            <h1>Nike</h1>
            <p>Excepteur veniam qui ex duis duis commodo. Esse qui ut irure pariatur sunt id minim ex proident enim fugiat id quis nisi. Cupidatat incididunt nostrud dolore ipsum ullamco amet ullamco commodo excepteur ullamco. Pariatur ut excepteur adipisicing qui excepteur officia cupidatat consequat amet mollit magna veniam do. </p>
          </div> 
          <div className={styles.isi2}>      
          <h1>Reebok</h1>
          <p>Excepteur veniam qui ex duis duis commodo. Esse qui ut irure pariatur sunt id minim ex proident enim fugiat id quis nisi. Cupidatat incididunt nostrud dolore ipsum ullamco amet ullamco commodo excepteur ullamco. Pariatur ut excepteur adipisicing qui excepteur officia cupidatat consequat amet mollit magna veniam do. </p>
          </div> 
        </div>
      </div>
      {/* <footer/> */}
      </div>
  )
}