import Layout from '../layouts/layout';
import Head from '../components/head';

  export default function Req(){
    return(
      <Layout>
      <div>
        <Head judul="Request"/>
        <p>Silahkan request dengan mengisi Form Di Bawah ini. <br/> Semua pesanan akan kami proses jika barang masih tersedia di Korea. </p>
        <h5> Request Form : <a href="/form" style={{ color: 'red' }}> Klik Disini!! </a> </h5>
        <hr/>
      </div>
      </Layout>
    );
  }