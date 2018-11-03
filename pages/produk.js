import React from 'react'
import Layout from '../components/layout'
import { Navbar } from '../components/nav'
import axios from 'axios'
const url = "http://localhost:8000";
const token = "Token 48c82b5e0c0547d86233641b3b4774e730994eee";




class Produk extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [
				{ id: 1, nama: 'Xiaomi' },
				{ id: 2, nama: 'Gula' },
				{ id: 3, nama: 'Sepeda' },
			]
		}
	}
	componentDidMount = async ()=>{
		const result = await axios.get(url+'/api/produk/')
		this.setState({products:result.data})
	}
	gantiCart = () =>{
		console.log(this.props)
		var jml = this.props.cartTotal+1
		this.props.gantiCart(jml)
	}
	addCart = async (id)=> {
	const order = await this.getOrder()
	try {
		const tambahBarang = await axios.post(
			`${url}/api/order/${order.id}/barang/`,
			{
				"qty": 1,
				"produk": id
			},
			{ headers: {"Authorization" : token} }
		)
		const total = this.props.cartTotal+1
		this.props.setCartTotal(total)
	}catch(e){
		this.setState({ error: e.message });
	}
};

addOrder = async () => {
	try {
		const newOrder = await axios.post(
			url + '/api/order/',
			{
			  "no_hape": "083840969140",
			  "alamat": "kepuh",
			  "ongkosKirim": 18000
			},
			{ headers: {"Authorization" : token} }
		);
		return newOrder
	}catch (e){
		this.setState({ error: e.message })
	}
}

getOrder = async () => {
	let order
	try {
		const existOrder = await axios.get(
			url + '/api/order/',
			{ headers: {"Authorization" : token} }	
		)
		if (existOrder.data.length>0){
			order = existOrder.data[existOrder.data.length - 1]
		}else{
			const newOrder = await this.addOrder()
			order = newOrder.data
		}
		return order
	} catch(e) {
		this.setState({ error: e.message })
	}
}
	render() {
		const { products } = this.state
		return (
			<Layout {...this.props}>	
					{	
						products.length && products.map((p) => (
						    <div className="col s3" key={p.id}>
						    	<div className="card card-product">
						    		<div className="card-image">
						    			<img src={p.gambar}/>
						    		</div>
						    		<div className="card-content">
						    			<p>{p.nama}</p>
						    		</div>
						    		<div className="card-action">
						    			<a className="waves-effect waves-light btn" onClick={()=>this.addCart(p.id)}>
											<i className="material-icons left">add_shopping_cart</i>
											Beli
						    			</a>
						    			<a className="btn-floating btn-small waves-effect waves-light grey right">
											<i className="material-icons">star</i>
						    			</a>
						    		</div>
						    	</div>
						    </div>
						))
					}
			</Layout>
		)
	}
}
export default Produk