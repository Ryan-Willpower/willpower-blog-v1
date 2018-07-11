import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.ul`
  padding-left: 0;
`

const Timeline = styled.li`
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    background: inherit;
  }

  ${media.lessThan("820px")`
    margin-left: 20px;
  `}
`

const Content = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 500px;
  height: auto;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: #FFF;

  ${media.lessThan('1250px')`
    width: 400px;
  `}

  ${media.lessThan('1040px')`
    width: 300px;
    height: auto;
  `}

  ${media.lessThan('820px')`
    width: calc(100vw - 200px);
    height: auto;
  `}
`

const Left = Content.extend`
  left: -540px;

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    border-top: 8px solid transparent;
    border-left: 15px solid #FFF;
    border-bottom: 8px solid transparent;
    left: 500px;
  }

  ${media.lessThan("1250px")`
    left: -445px;
    &::after {
      left: 400px;
    }
  `}

  ${media.lessThan("1040px")`
    left: -345px;
    &::after {
      left: 300px;
    }
  `}

  ${media.lessThan("820px")`
    left: 45px;

    &::after {
      content: none;
    }

    &::before {
      position: absolute;
      content: '';
      left: -15px;
      bottom: 8px;
      border-top: 8px solid transparent;
      border-right: 15px solid #FFF;
      border-bottom: 8px solid transparent;
    }
  `}
`

const Right = Content.extend`
  right: -45px;

  &::before {
    content: '';
    position: absolute;
    left: -15px;
    bottom: 8px;
    border-top: 8px solid transparent;
    border-right: 15px solid #FFF;
    border-bottom: 8px solid transparent;
  }
`

export const LeftTimeline = (props) => (
  <Timeline>
    <Left>
      {props.children}
    </Left>
  </Timeline>
)

export const RightTimeline = (props) => (
  <Timeline>
    <Right>
      {props.children}
    </Right>
  </Timeline>
)
