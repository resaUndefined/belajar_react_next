import {Component} from 'react'

const subSide = {
	'paddingLeft':'20px',
	'paddingTop':'10px',
	'paddingRight':'5px',
	'paddingBottom':'5px',
}

class Sidebar extends Component{
	render(){

			return(
				  <div className="collection">
			        <a href="#!" className="collection-item active">Menu 1</a>
				        <div className="card-action">
				          <a href="#" style={subSide}>Sub Menu 1</a>
				          <br/>
				          <a href="#" style={subSide}>Sub Menu 2</a>
				          <br/>
				          <a href="#" style={subSide}>Sub Menu 3</a>
				          <br/>
				          <a href="#" style={subSide}>Sub Menu 4</a>
				        </div>
			        
			    </div>
			)
		}
	}

export default Sidebar