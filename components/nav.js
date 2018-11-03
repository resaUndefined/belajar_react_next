import {Component} from 'react'
import Link from 'next/link'
const setel = {
  'paddingLeft':'20px',
}
const serc = {
  'minHeight':'50%',
  'paddingTop':'20px',
}


class SideNav extends Component{
  componentDidMount(){
    let elems = document.querySelector('.sidenav');
    let instances = M.Sidenav.init(elems, {});
    instances.open()
  }
  render(){
    return(
        <div>
          <ul id="slide-out" className="sidenav">
            <li><div className="user-view">
              <div className="background">
                <img src="static/img/office.jpg"/>
              </div>
              <a href="#user"><img className="circle" src="static/img/yuna.jpg"/></a>
              <a href="#name"><span className="white-text name">John Doe</span></a>
              <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          </ul>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      )
  }
}


class Navbar extends Component{
  openSideNav(){
    let elems = document.querySelector('.sidenav');
    let instances = M.Sidenav.init(elems, {});
    instances.open()
    console.log(M)
  }
  componentDidMount(){
    console.log(this.props.cartTotal)
  }
  render(){
    return(
      <div>
          <nav>
            <div className="nav-wrapper">
              <div className="nav-wrapper container"><a href="#" className="brand-logo" onClick={this.openSideNav}>Menu Side Nav</a>
              <ul className="right hide-on-med-and-down">
                <li><Link href="/produk"><a>Produk</a></Link></li>
                <li><Link href="/keranjang"><a>Keranjang ({this.props.cartTotal})</a></Link></li>
                <li><Link><a className="waves-effect waves-light btn-small">Login</a></Link></li>
              </ul>
              <SideNav/>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">=</i></a>
            </div>
            </div>
          </nav>
  
      </div>
      )
  }
}


class Konten extends Component{
  render(){
    return(
      <div>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center orange-text">Starter Template</h1>
          <div className="row center">
            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
          </div>
          <div className="row center">
            <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
          </div>
          <br/><br/>
        </div>
      </div>
      <div className="container">
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
    <br/><br/>
  </div>
  </div>
      )
  }
}


class Footer extends Component{
  render(){
    return(
        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      )
  }
}

export{
  Navbar,
  Konten,
  Footer
} 