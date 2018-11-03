import {Component} from 'react'
import Lay from '../components/layout'
import Layout from '../components/layout'

class Index extends Component{
	render(){
		return(
			<div>
				<Layout {...this.props}></Layout>
			</div>
			)
	}
}
export default Index