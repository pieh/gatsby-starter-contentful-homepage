import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"

export default function Page({ data: { page }, serverData }) {
  return (
    <Layout {...page}>
      <Box paddingY={5}>
        <Container width="narrow">
          <pre>{JSON.stringify({ serverData }, null, 2)}</pre>
          <Heading as="h1">{page.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`

export function getServerData() {
  return {
    props: {
      wat: true,
    },
  }
}
