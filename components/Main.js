import styled from 'styled-components'

const Section = styled.div`
  background: rgba(221, 221, 221, 0.8);
  margin: 50px 5%;
  padding: 20px;
`

const Head = styled.h1`
  width: 70%;
  margin: 5% auto 0;
  padding-bottom: 20px;
  text-align: center;
  color: gray;
  border-bottom: 2px dashed gray;
`

const LargeHead = styled.p`
  font-size: 4em;
  text-align: center;
  margin: 1%;
`

const Content = styled.p`
  text-align: center;
  font-size: 1.5em;
  color: #555;
`

export default () => (
  <Section>
    <LargeHead>Ryan Willpower</LargeHead>
    <Head>Short Intro</Head>
    <Content>Surasak Chaisurin, The Lazy web developer</Content>
    <Content>My job is freelance web developer and designer</Content>
    <Content>You see a cat at the header?</Content>
    <Content>I created it with Adobe Illustrator and save it as .svg</Content>
    <Content>And This site I use "Next.js" &#x25B2;</Content>
    <Content>Why? because I love a word "Zeit" lolz</Content>
    <Head>My Diary of Life &#x2764;</Head>
  </Section>
)
