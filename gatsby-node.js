// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const queryResults = await graphql(`
//     query AllProjects {
//       allProjects {
//         nodes {
//           id
//         }
//       }
//     }
//   `)

//   const projectTemplate = path.resolve(`./src/templates/Projects.jsx`)
//   queryResults.data.allProjects.nodes.forEach(node => {
//     createPage({
//       path: `/project/${node.id}`,
//       component: projectTemplate,
//       context: {
//         // This time the entire product is passed down as context
//         project: node,
//       },
//     })
//   })
// }

const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`./src/templates/Product.jsx`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
      },
    })
  })
}
