import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const activeProjects = {
    name: "Active projects",
    chunk: "Here are a few of our favourite open source projects. For a list of all publicly available repos, see the Guardian’s GitHub account.",
    projects: [{
        name: "Frontend",
        description: "Source for the Guardian’s next-generation responsive website."
    }]
}

const IndexPage = () => (
  <Layout>
    <SEO title="Open Source" />
    <h1>Open Source</h1>
    <Section section = { activeProjects } />
  </Layout>
)

export default IndexPage
