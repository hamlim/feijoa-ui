import { ThemeToggle } from '@components/ui/theme-toggle'
import { Heading } from '@components/ui/heading'
import { Container } from '@components/ui/container'

export function Nav() {
  return (
    <Container className="flex justify-between items-center">
      <Heading is="h1">Feijoa UI</Heading>
      <ThemeToggle />
    </Container>
  )
}
