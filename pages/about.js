import styled from 'styled-components'
import { Main, LeftTimeline, RightTimeline } from '../components/Timeline'

const Section = styled.div`
  background: rgba(221, 221, 221, 0.8);
  margin: 50px 5%;
  padding: 20px;
`

export default () => (
  <Section>
    <Main>
      <LeftTimeline>
        <h1><time>2013 - 2015</time></h1>
        <p>Studied at Nawamintrachinutit Bodindecha as Math/Sci Course.</p>
      </LeftTimeline>
      <RightTimeline>
        <h1><time>2016</time></h1>
        <p>Started study bechelor as Network Engineer at Mahanakorn University of Technology.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15495.787336295047!2d100.8555194!3d13.8422299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf46a3686886c4718!2sMahanakorn+University+of+Technology!5e0!3m2!1sen!2sth!4v1531300018305" width="400" height="300" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
        <p>(FYI that you don't know where's the MUT?)</p>
      </RightTimeline>
      <LeftTimeline>
        <h1>Second semester of freshmen</h1>
        <p>Found and started to learn fundamental of programming (input/output, decistion, loop)</p>
      </LeftTimeline>
      <RightTimeline>
        <h1>Summer semester of freshmen</h1>
        <p>Tried to learn programming by myself by started at Python programming</p>
        <p>Also start learning HTML, CSS, JavaScript</p>
      </RightTimeline>
      <LeftTimeline>
        <h1>First semester of sophomore</h1>
        <p>Started to learn React and PHP for made a custom theme for Wordpress</p>
      </LeftTimeline>
      <RightTimeline>
        <h1>Second semester of sophomore</h1>
        <p>Employee at EasyLink 1998 Co., Ltd. as part-time designer</p>
      </RightTimeline>
      <LeftTimeline>
        <h1>Now</h1>
        <p>Learning Funtional Programming with JavaScript</p>
      </LeftTimeline>
    </Main>
  </Section>
)
