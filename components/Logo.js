import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgba(221, 221, 221, 0.5);
`

const AlignCenter = styled.h2`
  align-self: center;
`

export default () => (
  <Center>
    <AlignCenter>&#x003C;willpower &#x002F;&#x003E;</AlignCenter>
    <img src="../static/cat.svg" alt="cute cat logo" />
  </Center>
)
