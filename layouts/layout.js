import Header from '../components/header'; 
import Footer from '../components/footer'; 
import Head from 'next/head'; 
 
export default function Layout(props){
    return(
        <div>         
            <Head/>                 
            <Header />
                <section className="section">             
                <div className="container">                 
                {props.children}             
                </div>         
                </section>                  
            <Footer />     
        </div>
    );
}