import React, { Component } from 'react'
import Layout from '../layouts/layout';
import Head from '../components/head';

export default class extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            nama:'',
            nomor:'',
            email:'',
            pesanan:'',
            pembayaran:'',
            nomina:'',
        }
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value,

        });
    }

    render(){
        return(
            <Layout>
                <Head judul="Form"/>
                <div>
                    <h4> Goods Request Form : </h4>
                    <br/>
                    <table>
                        <tr>
                            <td> Nama </td>
                            <td> : </td>
                            <td>
                                <input type="text" name="nama" value={this.state.nama} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td> Nomor </td>
                            <td> : </td>
                            <td>
                                <input type="text" name="nomor" value={this.state.nomor} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td> Email </td>
                            <td> : </td>
                            <td>
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td> Nama Barang </td>
                            <td> : </td>
                            <td>
                                <input type="text" name="pesanan" value={this.state.pesanan} onChange={this.handleChange}/>
                            </td>
                            <td colSpan="3"> 
                            <p style={{fontSize: '12px', margin: 'auto'}}> Jika barang lebih dari satu,<br/> gunakan (,) untuk pemisah. </p>
                            </td>
                        </tr>
                        <tr>
                            <td> Pembayaran </td>
                            <td> : </td>
                            <td>
                                <input type="text" name="pembayaran" placeholder="DP/Fullpay" value={this.state.pembayaran} onChange={this.handleChange}/>
                            </td>
                            
                            <td> Nomina </td>
                            <td> : </td>
                            <td>
                                <input type="text" name="nomina" value={this.state.nomina} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </table>
                    <hr/>
                </div>

                <div>
                    <h4> List of Requests for Your Goods : </h4>
                    <label> Nama : {this.state.nama}</label>
                    <br/>
                    <label> Nomor : {this.state.nomor}</label>
                    <br/>
                    <label> Email : {this.state.email}</label>
                    <br/>
                    <label> Pembayaran : {this.state.pembayaran} {this.state.nomina}</label>
                    <br/>
                    <label> Nama Barang : {this.state.pesanan}</label>                 
                    <hr/>
                </div>
            </Layout>
        );
    }
}