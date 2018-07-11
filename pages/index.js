import Head from '../components/Head'
import Menu from '../components/Menu'
import Main from '../components/Main'
import styled, { injectGlobal } from 'styled-components'
import img from '../static/cat-coding.jpg'

injectGlobal`
  body {
    margin: 0;
    font-family: 'Itim', cursive;
    background-image: url(${img});
    max-width: 100%;
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

const Title = styled.h1`
  font-size: 15px;
  color: red;
`

export default () => (
  <Main />
)
