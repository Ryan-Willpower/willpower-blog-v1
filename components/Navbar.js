import Link from 'next/link'
import styled from 'styled-components'

const link = {
  "/": "Home",
  about: "My Life",
  portfoilo: "Portfoilo",
  blog: "Blog",
  contact: "Contact",
}

const Navigation = styled.nav`
  width: 100%;
  height: 80px;
  background: #FFF;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`

const StyledLink = styled.a`
  font-size: 1.5em;
  text-decoration: none;
  color: gray;
  cursor: pointer;
  align-self: center;
  &:hover {
    color: lightgray;
  }
`

export default () => (
  <Navigation>
    {
      Object.keys(link).map((item) => (
        <Link href={item} key={item}>
          <StyledLink>{link[item]}</StyledLink>
        </Link>
      ))
    }
  </Navigation>
)
