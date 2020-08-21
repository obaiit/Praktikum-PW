import Layout from '../layouts/layout'; 
import Head from '../components/head';
 
function Beranda(){     
  return (         
  <Layout>                         
  <div className="card-group">
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">Wellcome To...</h3>
      <p className="card-text"> 
        <Head judul="BITE Shop"/>
        <br/>
        E-Commerce yang menjual barang-barang KOREA WAVE dan KPOP.
        <br/>
        Menggunakan dua pengiriman, yaitu dari Dalam Negeri dan Luar Negeri.
      </p>
    </div>
</div>
</div>    
    </Layout>     
    ); 
  } 
 
export default Beranda;