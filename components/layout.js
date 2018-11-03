import {Component} from 'react'
import Link from 'next/link'
import {Navbar,Konten,Footer} from './nav'
import Sidebar from './sidebar'

const setelSide = {
  'paddingLeft':'30px',
  'paddingTop':'80px',
}
const setelkonten = {
  'paddingLeft':'20px',
  'paddingright':'50px',
}
const setelrow = {
  'paddingTop':'20px',
}

const TampilDefault = () =>(
		<div className="section">
						      <div className="row">
						        <div className="col s12 m4">
						          <div className="icon-block">
						            <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
						            <h5 className="center">Speeds up development</h5>

						            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
						          </div>
						        </div>

						        <div className="col s12 m4">
						          <div className="icon-block">
						            <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
						            <h5 className="center">User Experience Focused</h5>

						            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
						          </div>
						        </div>

						        <div className="col s12 m4">
						          <div className="icon-block">
						            <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
						            <h5 className="center">Easy to work with</h5>

						            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
						          </div>
						        </div>
      						</div>
						</div>
	)

class Layout extends Component{
	componentDidMount(){
    console.log('layout',this.props.cartTotal)
  }
	render(){
		const {children} = this.props
		return(
			<div className="body_flex">
				<Navbar {...this.props} />
					<div className="main container">
					<div className="row main_flex" style={setelrow}>
						<div className="col s2" style={setelSide}>
							{ children ? <div></div> : <Sidebar/> }
						</div>

						<div className="col s10" style={setelkonten}>
							{ children ? children : <TampilDefault/> }
					</div>		
				</div>
				</div>

				<Footer/>
			</div>
			)
	}
}

export default Layout