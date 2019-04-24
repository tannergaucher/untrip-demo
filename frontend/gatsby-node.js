const path = require("path")
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      query {
        gcms {
          posts {
            id
            title
          }
        }
      }
    `)
      .then(result => {
        result.data.gcms.posts.map(post => {
          createPage({
            path: `/posts/${_.kebabCase(post.title)}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              id: post.id,
            },
          })
        })
        resolve()
      })
      .catch(error => console.log(error))
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}
