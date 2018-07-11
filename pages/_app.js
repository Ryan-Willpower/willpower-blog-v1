import App, {Container} from 'next/app'
import React from 'react'
import Menu from '../components/Menu'
import Head from '../components/Head'
import Footer from '../components/Footer'

class Layout extends React.Component {
  render () {
    const {children} = this.props
    return <>
      <Head />
      <Menu />
      {children}
      <Footer />
    </>
  }
}
export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  }
}
