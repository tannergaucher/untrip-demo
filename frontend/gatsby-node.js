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

// TODO: make slugs onCreateNode
