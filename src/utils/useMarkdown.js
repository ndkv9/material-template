import { graphql, useStaticQuery } from 'gatsby'

const useMarkdown = title => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { hidden: { eq: true } } }
        sort: { fields: frontmatter___nav_order, order: ASC }
      ) {
        nodes {
          body
          fields {
            title
          }
        }
      }
    }
  `)

  const mdx = data.allMdx.nodes.filter(item => item.fields.title === title)[0]

  return mdx
}

export default useMarkdown
