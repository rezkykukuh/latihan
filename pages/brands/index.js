import Head from "next/head"; 
import Link from 'next/link';
import  styles  from "../../styles/brand.module.css";
import Image from 'next/image';

const Brands = () => {
    return (
      <>
      <div>
        <Head>
          <title>Brands | List</title>
          <meta name="keywords" content="brands"></meta>
        </Head>
      </div>
      <div className="container"> 
      <div className="section">
        <h1>All Brands</h1>
        <div className={styles.brands}>
          <div className={styles.konten}>
          <Link href="https://www.nike.com/id/"><h3>Nike</h3></Link>
          <img src="/image/nike.jpg"></img>
          </div>
          <div className={styles.konten}>
          <Link href="/reebok/"><h3>Reebok</h3></Link>
          <img src="/image/reebok.jpg"></img>
          </div>
          </div>
          </div>
      </div>
      </>
    );
  }
   
  export default Brands;