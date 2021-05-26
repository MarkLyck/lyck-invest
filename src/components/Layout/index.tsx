import styled from '@emotion/styled'

const Container = styled.div`
  padding: 64px;
`

const Layout = ({ children }: any) => {
  return <Container>{children}</Container>
}

export default Layout
