import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  constructor(props){
    super(props)
    this.state = {
      cartTotal : 0
    } 
  }
  setCartTotal = (isi) =>{
    this.setState({cartTotal:isi})
  }
  hitungCartTotal = (keranjang) => {
    let remanen = 0
    for (var i = 0; i < keranjang.length; i++) {
      remanen+=keranjang[i].qty
    }
    this.setCartTotal(remanen)
  }
  render () {
    const { Component, pageProps } = this.props
    console.log(this.state)
    return (
      <Container>
        <Component {...pageProps} 
        cartTotal={this.state.cartTotal}
        setCartTotal={this.setCartTotal}
        hitungCartTotal={this.hitungCartTotal}/>
      </Container>
    )
  }
}