import { Container } from 'feijoa-ui/container'
import { ListItem } from 'feijoa-ui/list'
import { Box } from 'feijoa-ui/box'
import { cn } from 'feijoa-ui/cn'

function Layout({ children }) {
  return <div className="grid grid-cols-12">{children}</div>
}
function Sidebar() {
  return (
    <div className="grid col-span-2">
      <nav>
        <Box is="ul" className={cn('my-6 ml-6 [&>li]:mt-2')}>
          <ListItem>Accordion</ListItem>
          <ListItem>Alert Dialog</ListItem>
          ...
        </Box>
      </nav>
    </div>
  )
}
function Main({ children }) {
  return <div className="col-span-10">{children}</div>
}

export default function ComponentsLayout({ children }) {
  return (
    <Container>
      <Layout>
        <Sidebar />
        <Main>{children}</Main>
      </Layout>
    </Container>
  )
}
