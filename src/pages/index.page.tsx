import { Title } from "@mantine/core"
import { AppLayout } from "components/templates/AppLayout"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Title>Child</Title>
    </AppLayout>
  )
}

export default Home
