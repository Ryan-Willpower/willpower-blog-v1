import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import Link from 'next/link'

const Section = styled.div`
  max-width: 100%;
  background: #DDD;
`

const CustomFooter = styled.footer`
  margin: 0 auto;
  height: 80px;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
`

const BkLink = styled.a`
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`

export default () => (
  <Section>
    <CustomFooter>
      <BkLink href="https://www.facebook.com/willpower.a" target="_blank">
        <FontAwesome name="facebook-square" size="3x" />
      </BkLink>
      <BkLink href="https://github.com/Ryan-Willpower" target="_blank">
        <FontAwesome name="github" size="3x" />
      </BkLink>
      <BkLink href="#">
        <FontAwesome name="linkedin" size="3x" />
      </BkLink>
    </CustomFooter>
  </Section>
)
