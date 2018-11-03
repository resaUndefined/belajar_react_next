import {Component} from 'react';
import Layout from '../../components/layout'
import axios from 'axios'
const url = "http://localhost:8000";
const token = "Token 48c82b5e0c0547d86233641b3b4774e730994eee";

const setelSide = {
  'paddingLeft':'10px',
  'paddingRight':'10px',
  'width':'95%',
  'fontColor':'green',
  'borderTop': '1px solid rgba(160,160,160,0.2)',
}
const padd = {
	'marginBottom':'15px',
}
const kartu = {
	'marginTop':'85px',
}
const gbr = {
	'paddingLeft':'-10px',
}
const simbol = {
	'marginBottom':'-10px',
	'verticalAlign':'middle',
}
const del = {
	'marginLeft':'20px',
}
class Keranjang extends Component{
	constructor(props) {
		super(props);
		this.state = {
			keranjang: [], //initial state
			error: "keranjang error"
		};
		this.axios = axios.create();
		this.axios.defaults.baseURL = url;
		this.axios.defaults.headers.common["Authorization"] = token;
	}
	componentDidMount = async () => {
		try {
			const order = await this.axios.get("/api/order/");
			console.log("order",order)
			if(order.data.length > 0) {
				const lastOrder = order.data[order.data.length - 1];
				const barang = await this.axios.get(
					`/api/order/${lastOrder.id}/barang/`
					);
				console.log(barang)
				this.props.hitungCartTotal(barang.data)
				this.setState({ keranjang: barang.data });
			}
		} catch(e) {
			console.log("error ", e);
			this.setState({ error: e.message });
		}
	};

	// onChange = () => {  };

	render(){
		const { keranjang } = this.state;
		console.log('keranjang',keranjang)
		return(
			<Layout {...this.props}>
				<div className="row">
				    <div className="col l12">
				      <div className="card" style={kartu}>
				        <div className="card-action" style={padd}>
				          <div className="col l1">
				          <input type="checkbox" className="filled-in" checked="checked" />
				          <span></span>
				          </div>
				          <div className="col l9">
				          	Pilih Semua Produk
				          </div>
				          <div className="col l2 right-align">
				          	<b>Hapus</b>
				          </div>
				        </div>
				        {keranjang.map(data => (
				        <div className="card-content" style={padd} key={data.id}>
				        <hr style={setelSide} />
				          <div className="col l1">
				          	<input type="checkbox" className="filled-in" checked="checked" />
				          <span></span>
				          </div>
				          <div className="col l1 left-align" style={gbr}>
							<img src={data.produk.gambar} width="100%" vertical-align="middle"/>
				          </div>
				          <div className="col l6">
				          	<div className="col l8">
				          		<p>{data.produk.nama}</p>
				          	</div>
				          	<div className="col l8">
				          		<p>{data.qty}</p>
				          	</div>
				          </div>
				          <div className="col l4 right-align" style={simbol}>
				          	<div className="input-field col s6">
				          	<a className="klik">
					          <i className="material-icons prefix">add_circle</i>
					          <input id="icon_prefix" type="text" className="validate" />
					        </a>
					        <a className="klik" >
					          <i className="material-icons prefix">remove_circle</i>
					        </a>
					        </div>
					        <div className="input-field col s2" style={del}>
					        	<a className="klik">
					        		<i className="material-icons prefix">delete</i>
					        	</a>
					        </div>
					        <div className="input-field col s4">
					        	
					        </div>
				          </div>
				        </div>
				        ))}
						{/*end card content*/}
				        <br/>
				      </div>
				    </div>
				  </div>
			</Layout>
			)
	}
}

export default Keranjang